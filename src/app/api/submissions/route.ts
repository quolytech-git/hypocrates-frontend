import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

interface SubmissionPayload {
  type: "contact" | "demo" | "waitlist";
  name?: string;
  email: string;
  company?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<SubmissionPayload>;
    const email = (body.email ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const entry = {
      id: crypto.randomUUID(),
      type: body.type ?? "contact",
      name: (body.name ?? "").trim(),
      email,
      company: (body.company ?? "").trim(),
      message: (body.message ?? "").trim(),
      createdAt: new Date().toISOString(),
    };

    const dataDir = path.join(process.cwd(), ".data");
    const filePath = path.join(dataDir, "submissions.json");
    await fs.mkdir(dataDir, { recursive: true });

    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      // File does not exist yet
    }

    existing.push(entry);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");

    return NextResponse.json(
      { ok: true, id: entry.id, message: "Thank you! Your request has been received." },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process request right now." },
      { status: 500 }
    );
  }
}
