export default function CostShareCaseStudy() {
  return (
    <details className="case-study" id="cost-share-details">
      <summary>Explore the Cost Share case study</summary>
      <div className="case-study-body">
        <h4>Overview</h4>
        <p>Cost Share is a cross-platform expense-sharing application developed for Android and iOS using React Native and Expo. It helps users organize group expenses, calculate balances, split individual bill items, and simplify settlements.</p>
        <h4>Problem</h4>
        <p>Shared bills become difficult to track when people pay for different items, split purchases unevenly, or settle at different times. Manual receipt entry adds friction, and small rounding differences can leave balances inconsistent.</p>
        <h4>Solution</h4>
        <p>Group expenses, item assignments, balance tracking, and settlement records live in one mobile workflow. Users can scan a receipt, review extracted items, assign participants, and confirm the split before saving.</p>
        <h4>Technical architecture</h4>
        <ol className="architecture-flow" aria-label="Receipt processing architecture">
          <li><strong>React Native / Expo</strong><span>Capture, compress, and review receipt images</span></li>
          <li><strong>Supabase Edge Function</strong><span>Authenticated server-side receipt processing in Deno</span></li>
          <li><strong>Gemini</strong><span>Extract structured receipt items and totals</span></li>
          <li><strong>Mobile review → Supabase</strong><span>Assign items, reconcile shares, and save expenses</span></li>
        </ol>
        <h4>Engineering decisions</h4>
        <ul>
          <li>A shared Android/iOS codebase and reusable components for balances, search, loading, and empty states.</li>
          <li>React Query for server data and React contexts for authentication, theme, and currency concerns.</li>
          <li>Backend services separated from mobile UI; Gemini requests run through an Edge Function.</li>
          <li>Compressed receipt images reduce request payloads. The current scanner uses image-based AI extraction rather than on-device OCR.</li>
        </ul>
        <h4>Engineering challenges</h4>
        <ul>
          <li><strong>Financial rounding:</strong> item shares are rounded to cents, with the remainder reconciled so splits match the receipt total.</li>
          <li><strong>Receipt ambiguity:</strong> discount post-processing avoids double-subtracting savings lines; users can review and correct extracted data.</li>
          <li><strong>Session expiry:</strong> the scanner refreshes authentication and retries once after a 401 response, then provides a recoverable error.</li>
          <li><strong>Asynchronous UI:</strong> scanning, editing, camera permissions, and failure states have explicit interfaces rather than leaving a blank screen.</li>
        </ul>
        <p className="case-source">Architecture and decisions reflect the current application source.</p>
      </div>
    </details>
  )
}
