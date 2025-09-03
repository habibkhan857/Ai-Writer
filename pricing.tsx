import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - AI Writer</title>
        <script src="https://cdn.paddle.com/paddle/v2/paddle.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              Paddle.Initialize({ token: 'YOUR-PADDLE-CLIENT-TOKEN' });
            `,
          }}
        />
      </Head>
      <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>Choose Your Plan</h1>
        <p>Flexible plans to get started with AI Writer.</p>
        <button
          onClick={() =>
            (window as any).Paddle.Checkout.open({
              items: [{ priceId: "pri_12345", quantity: 1 }],
            })
          }
          style={{
            padding: "12px 24px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Buy Now with Paddle
        </button>
      </main>
    </>
  );
}
