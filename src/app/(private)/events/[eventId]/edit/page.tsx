import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventForm from "@/components/forms/EventForm";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/drizzle/db";
import { notFound } from "next/navigation";

const EditEventPage = async ({ params }: { params: { eventId: string } }) => {
  const { eventId } = await params;
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const event = await db.query.EventTable.findFirst({
    where: ({ id, clerkUserId }, { and, eq }) =>
      and(eq(clerkUserId, userId!), eq(id, eventId)),
    orderBy: ({ createdAt }, { desc }) => [desc(createdAt)],
  });

  if (!event) return notFound();

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Edit Event</CardTitle>
      </CardHeader>
      <CardContent>
        <EventForm
          event={{ ...event, description: event.description || undefined }}
        />
      </CardContent>
    </Card>
  );
};

export default EditEventPage;
