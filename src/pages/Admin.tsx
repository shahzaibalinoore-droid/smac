import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Eye, MousePointerClick, MessageSquare, LogOut, BarChart3 } from "lucide-react";

interface PageView {
  id: string;
  page_path: string;
  visitor_id: string | null;
  user_agent: string | null;
  referrer: string | null;
  created_at: string;
}

interface ClickEvent {
  id: string;
  element_id: string | null;
  element_text: string | null;
  page_path: string;
  visitor_id: string | null;
  created_at: string;
}

interface ChatRecord {
  id: string;
  visitor_id: string | null;
  visitor_name: string | null;
  message: string;
  is_from_visitor: boolean | null;
  page_path: string | null;
  created_at: string;
}

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [clickEvents, setClickEvents] = useState<ClickEvent[]>([]);
  const [chatRecords, setChatRecords] = useState<ChatRecord[]>([]);
  const [stats, setStats] = useState({ views: 0, clicks: 0, chats: 0, visitors: 0 });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user || !isAdmin) return;

    const fetchData = async () => {
      const [viewsRes, clicksRes, chatsRes] = await Promise.all([
        supabase.from("page_views").select("*").order("created_at", { ascending: false }).limit(100),
        supabase.from("click_events").select("*").order("created_at", { ascending: false }).limit(100),
        supabase.from("chat_records").select("*").order("created_at", { ascending: false }).limit(100),
      ]);

      const views = viewsRes.data || [];
      const clicks = clicksRes.data || [];
      const chats = chatsRes.data || [];

      setPageViews(views);
      setClickEvents(clicks);
      setChatRecords(chats);

      const uniqueVisitors = new Set([
        ...views.map((v) => v.visitor_id),
        ...clicks.map((c) => c.visitor_id),
      ]);

      setStats({
        views: views.length,
        clicks: clicks.length,
        chats: chats.length,
        visitors: uniqueVisitors.size,
      });
    };

    fetchData();
  }, [user, isAdmin]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!isAdmin) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <Card className="max-w-md">
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground mb-4">
                You don't have admin access. Contact the administrator to get access.
              </p>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleString();
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Visitor analytics & tracking</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.views}</p>
                  <p className="text-sm text-muted-foreground">Page Views</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MousePointerClick className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.clicks}</p>
                  <p className="text-sm text-muted-foreground">Click Events</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.chats}</p>
                  <p className="text-sm text-muted-foreground">Chat Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stats.visitors}</p>
                  <p className="text-sm text-muted-foreground">Unique Visitors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tabs */}
        <Tabs defaultValue="pageviews">
          <TabsList className="mb-4">
            <TabsTrigger value="pageviews">Page Views</TabsTrigger>
            <TabsTrigger value="clicks">Click Events</TabsTrigger>
            <TabsTrigger value="chats">Chat Records</TabsTrigger>
          </TabsList>

          <TabsContent value="pageviews">
            <Card>
              <CardHeader>
                <CardTitle>Recent Page Views</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Page</TableHead>
                      <TableHead>Visitor ID</TableHead>
                      <TableHead>Referrer</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pageViews.map((view) => (
                      <TableRow key={view.id}>
                        <TableCell className="font-medium">{view.page_path}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{view.visitor_id?.slice(0, 8)}...</TableCell>
                        <TableCell className="text-sm">{view.referrer || "—"}</TableCell>
                        <TableCell className="text-sm">{formatDate(view.created_at)}</TableCell>
                      </TableRow>
                    ))}
                    {pageViews.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                          No page views recorded yet
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clicks">
            <Card>
              <CardHeader>
                <CardTitle>Recent Click Events</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Element</TableHead>
                      <TableHead>Page</TableHead>
                      <TableHead>Visitor ID</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clickEvents.map((click) => (
                      <TableRow key={click.id}>
                        <TableCell className="font-medium max-w-[200px] truncate">
                          {click.element_text || click.element_id || "—"}
                        </TableCell>
                        <TableCell>{click.page_path}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{click.visitor_id?.slice(0, 8)}...</TableCell>
                        <TableCell className="text-sm">{formatDate(click.created_at)}</TableCell>
                      </TableRow>
                    ))}
                    {clickEvents.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                          No click events recorded yet
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chats">
            <Card>
              <CardHeader>
                <CardTitle>Chat Records</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Visitor</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Page</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {chatRecords.map((chat) => (
                      <TableRow key={chat.id}>
                        <TableCell>{chat.visitor_name || chat.visitor_id?.slice(0, 8) || "—"}</TableCell>
                        <TableCell className="max-w-[300px] truncate">{chat.message}</TableCell>
                        <TableCell>{chat.page_path || "—"}</TableCell>
                        <TableCell className="text-sm">{formatDate(chat.created_at)}</TableCell>
                      </TableRow>
                    ))}
                    {chatRecords.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                          No chat records yet. Chat data from Tidio needs webhook integration.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
