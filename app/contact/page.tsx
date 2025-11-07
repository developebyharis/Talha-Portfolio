import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Link from "next/link";

export default async function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl">
          Get In Touch
        </h1>
        <p className="mb-12 text-lg text-muted-foreground text-pretty">
          Have a project in mind or want to discuss embedded systems? Feel free
          to reach out!
        </p>

        <div className="">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="inline-flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <Link
                      href="mailto:haris@example.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      haris@example.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <Link
                      href="https://linkedin.com/in/hariskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/hariskhan
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <Link
                      href="https://github.com/hariskhan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      github.com/hariskhan
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm currently available for freelance projects and consulting
                  opportunities. Whether you need help with firmware
                  development, IoT solutions, or embedded systems design, I'd
                  love to hear from you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
