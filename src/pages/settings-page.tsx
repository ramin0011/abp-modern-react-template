import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getRuntimeConfig } from "@/lib/runtime-config";

export function SettingsPage() {
  const config = getRuntimeConfig();
  const [tenant, setTenant] = useState(
    () => sessionStorage.getItem("abp_tenant_id") ?? "",
  );
  const save = () => {
    if (tenant) {
      sessionStorage.setItem("abp_tenant_id", tenant);
    } else {
      sessionStorage.removeItem("abp_tenant_id");
    }
    toast.success("Settings saved");
  };
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <p className="text-sm font-semibold text-primary">Configuration</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Runtime values are sourced from dynamic-env.json.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>ABP connection</CardTitle>
          <CardDescription>
            These values can be changed at deployment time without rebuilding.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            Application
            <Input className="mt-2" value={config.application.name} readOnly />
          </label>
          <label className="text-sm font-semibold">
            OpenIddict client
            <Input
              className="mt-2"
              value={config.oAuthConfig.clientId}
              readOnly
            />
          </label>
          <label className="text-sm font-semibold sm:col-span-2">
            API URL
            <Input className="mt-2" value={config.apis.default.url} readOnly />
          </label>
          <label className="text-sm font-semibold sm:col-span-2">
            Auth server
            <Input
              className="mt-2"
              value={config.oAuthConfig.issuer}
              readOnly
            />
          </label>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tenant context</CardTitle>
          <CardDescription>
            The selected tenant is sent as ABP’s __tenant header.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="text-sm font-semibold">
            Tenant ID
            <Input
              className="mt-2"
              value={tenant}
              onChange={(event) => setTenant(event.target.value)}
              placeholder="Leave empty for host context"
            />
          </label>
          <Button className="mt-5" onClick={save}>
            Save settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
