import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Security headers
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Input validation schema
const helloSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long").optional(),
});

// Rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function GET(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { 
          status: 429,
          headers: {
            ...securityHeaders,
            'Retry-After': '60',
          }
        }
      );
    }

    // Parse query parameters safely
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    // Validate input
    const validationResult = helloSchema.safeParse({ name });
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "Invalid input",
          details: validationResult.error.errors
        },
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Response data
    const responseData = {
      message: validationResult.data.name 
        ? `Hello, ${validationResult.data.name}! Welcome to the Next-Gen Web Scaffold!` 
        : "Hello, world! Welcome to the Next-Gen Web Scaffold!",
      timestamp: new Date().toISOString(),
      version: "2.0.0",
      features: [
        "Security-first approach",
        "TypeScript strict mode",
        "Rate limiting",
        "Input validation",
        "Security headers",
        "Error handling"
      ],
      developer: {
        name: "Professional Developer",
        expertise: ["Full-stack Development", "Security", "Performance Optimization"],
        aiPowered: true
      }
    };

    return NextResponse.json(responseData, {
      headers: {
        ...securityHeaders,
        'Cache-Control': 'public, max-age=300', // 5 minutes cache
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: "Something went wrong. Please try again later."
      },
      { 
        status: 500,
        headers: securityHeaders
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { 
          status: 429,
          headers: {
            ...securityHeaders,
            'Retry-After': '60',
          }
        }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate input
    const validationResult = helloSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "Invalid input",
          details: validationResult.error.errors
        },
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Process the data
    const responseData = {
      message: validationResult.data.name 
        ? `Hello, ${validationResult.data.name}! Your POST request was successful.` 
        : "Hello! Your POST request was successful.",
      timestamp: new Date().toISOString(),
      method: "POST",
      receivedData: validationResult.data,
      processed: true
    };

    return NextResponse.json(responseData, {
      headers: securityHeaders
    });

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: "Something went wrong. Please try again later."
      },
      { 
        status: 500,
        headers: securityHeaders
      }
    );
  }
}