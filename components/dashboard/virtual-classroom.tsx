'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Mic, MicOff, VideoOff, Users, MessageSquare, Hand } from 'lucide-react';

export function VirtualClassroom() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);

  return (
    <Card className="p-6 animate-scale-up">
      <div className="space-y-6">
        <div className="aspect-video bg-gray-900 rounded-lg relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white">Video Feed</p>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <Button
              size="sm"
              variant={isMuted ? 'destructive' : 'secondary'}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              variant={isVideoOff ? 'destructive' : 'secondary'}
              onClick={() => setIsVideoOff(!isVideoOff)}
            >
              {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              variant={isHandRaised ? 'default' : 'secondary'}
              onClick={() => setIsHandRaised(!isHandRaised)}
            >
              <Hand className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Participants
            </Button>
            <Button variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Chat
            </Button>
          </div>
          <Button variant="destructive">Leave Class</Button>
        </div>
      </div>
    </Card>
  );
}