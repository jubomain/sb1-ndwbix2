'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Key } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  model: string;
  createdAt: string;
}

export function ApiKeysManager() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyValue, setNewKeyValue] = useState('');
  const [newKeyModel, setNewKeyModel] = useState('openai');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddKey = () => {
    if (!newKeyName || !newKeyValue || !newKeyModel) {
      toast.error('Please fill in all fields');
      return;
    }

    const newKey: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: newKeyValue,
      model: newKeyModel,
      createdAt: new Date().toISOString(),
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName('');
    setNewKeyValue('');
    setNewKeyModel('openai');
    setIsAdding(false);
    toast.success('API key added successfully');
  };

  const handleRemoveKey = (id: string) => {
    setApiKeys(apiKeys.filter(key => key.id !== id));
    toast.success('API key removed successfully');
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-lora">API Keys Management</h2>
        <Button onClick={() => setIsAdding(!isAdding)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Key
        </Button>
      </div>

      {isAdding && (
        <div className="grid gap-4 mb-6 p-4 border rounded-lg">
          <div className="grid gap-2">
            <Label htmlFor="keyName">Key Name</Label>
            <Input
              id="keyName"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="e.g., OpenAI Production"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="keyValue">API Key</Label>
            <Input
              id="keyValue"
              value={newKeyValue}
              onChange={(e) => setNewKeyValue(e.target.value)}
              type="password"
              placeholder="sk-..."
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="keyModel">Model</Label>
            <select
              id="keyModel"
              value={newKeyModel}
              onChange={(e) => setNewKeyModel(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            >
              <option value="openai">OpenAI</option>
              <option value="anthropic">Anthropic</option>
              <option value="cohere">Cohere</option>
            </select>
          </div>
          <Button onClick={handleAddKey} className="w-full">Add Key</Button>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.map((key) => (
            <TableRow key={key.id}>
              <TableCell className="font-medium">{key.name}</TableCell>
              <TableCell>{key.model}</TableCell>
              <TableCell>{new Date(key.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveKey(key.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {apiKeys.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No API keys added yet</p>
        </div>
      )}
    </Card>
  );
}