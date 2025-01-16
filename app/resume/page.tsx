import React from "react";
import Head from "next/head";

const ResumePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={styles.container}>
        <iframe
          src="/lib/resume.pdf"
          style={styles.iframe}
          title="Resume"
        ></iframe>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    margin: 0,
  },
  iframe: {
    width: "80%",
    height: "90%",
    border: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default ResumePage;
