interface EmailTemplateProps {
  name: string
  message: string
  email: string
}

export function EmailTemplate({ name, message, email }: EmailTemplateProps) {
  const currentYear = new Date().getFullYear()

  return (
    <div
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#f7f7f7", // Re-added background color for the page
        padding: "30px 0", // Re-added vertical padding
      }}
    >
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          maxWidth: "600px", // Re-added max-width
          margin: "0 auto", // Re-added centering
          backgroundColor: "#ffffff",
          borderCollapse: "collapse",
        }}
      >
        {/* Header */}
        <thead>
          <tr>
            <td
              style={{
                backgroundColor: "#007bff", // A professional blue accent
                color: "#ffffff",
                padding: "25px 30px",
                textAlign: "center",
              }}
            >
              <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "bold" }}>SBP Hotel</h1>
              <p style={{ margin: "5px 0 0", fontSize: "16px", opacity: 0.9 }}>New Contact Form Submission</p>
            </td>
          </tr>
        </thead>
        {/* Body */}
        <tbody>
          <tr>
            <td style={{ padding: "30px" }}>
              <p style={{ fontSize: "16px", margin: "0 0 15px" }}>Hello Team,</p>
              <p style={{ fontSize: "16px", margin: "0 0 25px" }}>
                You&apos;ve received a new inquiry via the contact form on the <strong>SBP Hotel</strong> website. Please
                find the details below:
              </p>

              {/* Details Section */}
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #eee",
                  borderRadius: "6px", // Kept this border radius for the inner table as it looks good
                  padding: "15px 20px",
                  fontSize: "15px",
                  marginBottom: "25px",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "10px 0", width: "120px", verticalAlign: "top" }}>
                      Name:
                    </td>
                    <td style={{ padding: "10px 0", wordBreak: "break-word" }}>{name}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "10px 0", verticalAlign: "top" }}>Email:</td>
                    <td style={{ padding: "10px 0", wordBreak: "break-word" }}>{email}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold", padding: "10px 0", verticalAlign: "top" }}>Message:</td>
                    <td style={{ padding: "10px 0", wordBreak: "break-word" }}>{message}</td>
                  </tr>
                </tbody>
              </table>

              <p style={{ fontSize: "16px", margin: "0 0 15px" }}>Kind regards,</p>
              <p style={{ fontSize: "16px", margin: "0", fontWeight: "bold" }}>SBP Hotel Website</p>
            </td>
          </tr>
        </tbody>
        {/* Footer */}
        <tfoot>
          <tr>
            <td
              style={{
                backgroundColor: "#e9e9e9",
                textAlign: "center",
                fontSize: "12px",
                color: "#777",
                padding: "20px 30px",
              }}
            >
              <p style={{ margin: "0 0 5px" }}>&copy; {currentYear} SBP Hotel. All rights reserved.</p>
              <p style={{ margin: 0 }}>This email was sent from a notification-only address. Please do not reply.</p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

// Default props for previewing in v0
export default function EmailTemplatePreview() {
  return (
    <EmailTemplate
      name="John Doe"
      message="I would like to inquire about booking a room for a family vacation in July. Do you have any special offers for long stays?"
      email="john.doe@example.com"
    />
  )
}