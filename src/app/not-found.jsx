import { Button }    from "../components/Button";
import { CirclesBackground } from "@/components/CirclesBackground";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <h1>404 - Page Not Found</h1>
      <Button href="/">Go Home</Button>
    </Layout>
  );
}