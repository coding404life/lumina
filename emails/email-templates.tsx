import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { render } from "@react-email/render";

interface EmailTemplateProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonLink?: string;
}

const EmailTemplate = ({
  title,
  message,
  buttonText,
  buttonLink,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </Head>
      <Preview>{title}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#e7c9a5",
                dark: "#12141d",
                card: "#1a1d26",
                text: "#f8f8ff",
                muted: "#8d8d8d",
                black: "#16191e",
              },
            },
          },
        }}
      >
        <Body
          style={{ backgroundColor: "#12141d", margin: "0", padding: "0" }}
          className="bg-dark my-auto mx-auto font-sans"
        >
          {/* Main Wrapper Section to ensure dark background in all clients */}
          <Section style={{ backgroundColor: "#12141d", width: "100%" }}>
            <Container className="border border-white/5 border-solid mx-auto my-[40px] max-w-[600px] rounded-xl overflow-hidden bg-card shadow-2xl">
              {/* Header / Logo section */}
              <Section className="bg-linear-to-b from-dark-300 to-dark py-12 px-5 text-center">
                <Link
                  href="https://lumina.yahya-elmoshneb.com"
                  className="text-primary text-[28px] font-bold tracking-[4px] uppercase no-underline"
                >
                  <span
                    style={{
                      fontSize: "32px",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    📖
                  </span>
                  Lumina
                </Link>
              </Section>

              <Section className="p-10 text-center">
                <Heading className="text-primary text-[28px] font-bold m-0 mb-6">
                  {title}
                </Heading>
                <Text className="text-text text-[16px] leading-[26px] mb-8">
                  {message}
                </Text>

                {buttonText && buttonLink && (
                  <Section className="text-center my-6">
                    <Button
                      className="bg-primary text-dark-100 font-bold py-4 px-10 rounded-lg text-center no-underline inline-block"
                      href={buttonLink}
                    >
                      {buttonText}
                    </Button>
                  </Section>
                )}
              </Section>

              <Hr className="border border-solid border-white/5 my-0" />

              <Section className="p-10 text-center bg-black">
                <Text className="text-muted text-[13px] leading-[22px] m-0 mb-3 uppercase tracking-widest font-bold">
                  Lumina Knowledge Hub
                </Text>
                <Text className="text-muted text-[12px] leading-[20px] m-0 mb-4 opacity-70">
                  © {new Date().getFullYear()} Lumina. Built for explorers and
                  lifelong learners.
                </Text>
                <Text className="text-muted text-[12px] m-0">
                  <Link
                    href="https://lumina.yahya-elmoshneb.com"
                    className="text-muted underline mx-1"
                  >
                    Dashboard
                  </Link>
                  •
                  <Link
                    href="mailto:support@yahya-elmoshneb.com"
                    className="text-muted underline mx-1"
                  >
                    Support
                  </Link>
                </Text>
              </Section>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export async function welcomeEmail(fullName: string) {
  const html = await render(
    <EmailTemplate
      title="Welcome to Lumina!"
      message={`Hey ${fullName}, we're thrilled to have you here. Lumina is your ultimate knowledge hub, designed to help you organize, explore, and share insights like never before.`}
      buttonText="Start Exploring"
      buttonLink="https://lumina.yahya-elmoshneb.com"
    />,
  );
  return html;
}

export async function reEngagementEmail(fullName: string) {
  const html = await render(
    <EmailTemplate
      title="We Miss You!"
      message={`Hey ${fullName}, it's been a while since we last saw you. We've added several new features and improvements that we think you'll love. Why not come back and see what's new?`}
      buttonText="Come Back"
      buttonLink="https://lumina.yahya-elmoshneb.com"
    />,
  );
  return html;
}

export async function activeUserEmail(fullName: string) {
  const html = await render(
    <EmailTemplate
      title="You're Doing Great!"
      message={`Hi ${fullName}, we noticed you've been quite active lately. We love seeing how you're using Lumina to power your knowledge workflow. Keep it up!`}
      buttonText="Go to Dashboard"
      buttonLink="https://lumina.yahya-elmoshneb.com"
    />,
  );
  return html;
}
