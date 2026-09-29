import { Competency, CaseStudy, ThreatFeedItem } from '../types';

export const ANALYST_INFO = {
  name: 'Tanvir Ahmed',
  handle: 'TANVIR.SEC',
  role: 'Cybersecurity Analyst & Incident Response Specialist',
  location: 'Dhaka, Bangladesh',
  node: 'DHAKA NODE // AP-SOUTH-1',
  email: 'contact@tanvir-cybersec.bd',
  linkedin: 'linkedin.com/in/tanvir-cybersec',
  github: 'github.com/tanvir-cybersec',
  pgpKeyId: '0x8F4E2931A94C72D1',
  pgpFingerprint: 'B472 90D3 81AA 66E9 54D2  1182 8F4E 2931 A94C 72D1',
  pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: Tanvir Ahmed Official Defense Key (Dhaka CII Node)

mQGNBGZZ6nUBDAC/Q3rWb+K0wZ9e1r7t6U7JtKq1vHjZ8fXm0pL4qT2n
Tanvir Ahmed <contact@tanvir-cybersec.bd>
Created: 2024-01-15T00:00:00Z
Expires: 2028-01-15T00:00:00Z
Cipher: RSA 4096-bit SHA-512
Hash: SHA512 (PGP Key Verified)
-----END PGP PUBLIC KEY BLOCK-----`,
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDcv8UZ4OWH4nv4GEalITZ8waf0oEDL7Be9UCPkdDMQ6Vol92w7J_jGK-anxqotY52jW2j-2VoBFzse7Msi9r00J5Mhh3o6s_8rX1yXkk936wBlb8naSaMV-RZhlBP-nuWoLJKZzx3un52qbK7UkKjMsdt-qZxtiZbxCjxrsHwAUxtFSf3n0awpSAkbVbdrlB2ZdF2Zc4iTSGv_amUsAGvpVD-3U0JhT_cZzGZuGDAHyjX9t6jA53',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1X-2HURk0ITZIx7MjA_AQjL4pIseK9z77ANSTldX-yj9sdaYUQttaxVLmE8LXhcTENo7TfdQK5R416bD_QJjN6av2AcLCQbtSOrYZaPHbZn2IO32ikf0YmUulPY7Td621SJB3kjApjAecgoua5yOdmhK2do0Y1hSDSDCQ0SXDQD9UP1F9Z9nSOJtTLn3RVA7S3xxlAFyryU_tVNFjqhCwIbLf5jtxo5BnKKtkJViZk2hvhpLfc00Ka0KQ',
  headline: 'Building Resilient Digital Defenses in Bangladesh',
  subheadline: 'Tanvir Ahmed | Cybersecurity Analyst & Incident Response Specialist',
  bio: 'Dedicated to safeguarding critical information infrastructure, mitigating cyber threats, and enhancing digital security standards across public and enterprise networks.',
  profileNarrative1: `I am a Dhaka-based Cybersecurity Analyst specializing in threat intelligence, vulnerability assessment, and digital incident response. With a deep focus on Bangladesh's evolving cyber landscape, I help organizations secure their critical digital assets against emerging ransomware, malware, and data breaches.`,
  profileNarrative2: `My work bridges technical analysis with national security compliance, leveraging frameworks from BGD e-GOV CIRT and international standards to build proactive defense mechanisms.`
};

export const STATS = [
  {
    value: '40+',
    label: 'Security Audits Conducted',
    icon: 'verified_user',
    color: 'primary'
  },
  {
    value: '150+',
    label: 'Vulnerabilities Mitigated',
    icon: 'bug_report',
    color: 'secondary'
  }
];

export const CORE_FOCUS_AREAS = [
  'Incident Response',
  'VAPT',
  'Threat Intelligence'
];

export const FRAMEWORKS = [
  { name: 'OWASP Top 10', color: 'text-primary' },
  { name: 'MITRE ATT&CK', color: 'text-secondary' },
  { name: 'BGD e-GOV CIRT', color: 'text-tertiary' },
  { name: 'NIST CSF', color: 'text-on-surface' }
];

export const COMPETENCIES: Competency[] = [
  {
    id: 'threat-intel',
    title: 'Threat Intelligence & Monitoring',
    icon: 'troubleshoot',
    colorVariant: 'primary',
    description: 'Real-time threat identification, IOC analysis, and monitoring emerging cybersecurity alerts targeting local and regional networks.',
    tools: ['SIEM Logs', 'Suricata', 'MISP'],
    frameworkAlignment: 'MITRE ATT&CK & BGD e-GOV CIRT Threat Feed Sync',
    methodologies: [
      'Indicator of Compromise (IoC) extraction and correlation',
      'YARA rule authoring for regional malware variants',
      'Threat actor profiling targeting national Critical Information Infrastructure (CII)',
      'Automated dark web & underground forum monitoring for leaked enterprise credentials'
    ],
    deliverables: [
      'Weekly Threat Intelligence Bulletins with actionable IOC lists',
      'High-fidelity SIEM detection rules for Splunk and Wazuh',
      'BGD e-GOV CIRT proactive advisory response playbooks'
    ]
  },
  {
    id: 'vapt',
    title: 'VAPT & Red Team Audits',
    icon: 'policy',
    colorVariant: 'secondary',
    description: 'System audits, web application security analysis, and network vulnerability scanning to remediate exploit paths before exposure.',
    tools: ['Burp Suite', 'Nessus', 'Nmap'],
    frameworkAlignment: 'OWASP Top 10, ASVS 4.0, PTES Standard',
    methodologies: [
      'Black-box and grey-box web/API penetration testing',
      'Network perimeter mapping and privilege escalation vector discovery',
      'Mobile application security verification (OWASP MASVS)',
      'Business logic bypass exploration and insecure direct object reference (IDOR) testing'
    ],
    deliverables: [
      'Comprehensive vulnerability assessment reports with CVSS v3.1 scoring',
      'Executive risk summaries with actionable engineer-level remediation guides',
      'Re-testing validation certifications confirming 100% patch efficacy'
    ]
  },
  {
    id: 'incident-response',
    title: 'Incident Response & Forensics',
    icon: 'security',
    colorVariant: 'primary',
    description: '24/7 mitigation support, breach containment, log analysis, and root-cause digital forensics during ransomware outbreaks.',
    tools: ['Volatility', 'Wireshark', 'Autopsy'],
    frameworkAlignment: 'NIST SP 800-61 Rev 2, SANS Incident Handling Matrix',
    methodologies: [
      'Live volatile memory analysis and process injection artifact carving',
      'PCAP network traffic analysis for command-and-control (C2) beaconing',
      'Disk forensics, timeline reconstruction, and NTFS MFT parser execution',
      'Immediate endpoint isolation and ransomware blast-radius containment'
    ],
    deliverables: [
      'Post-Incident Root Cause Analysis (RCA) Forensic Dossiers',
      'Chain-of-custody documentation meeting legal admissibility standards',
      'Hardening and recovery roadmaps to prevent lateral re-infection'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance & CII Frameworks',
    icon: 'gavel',
    colorVariant: 'tertiary',
    description: 'Alignment with BGD e-GOV CIRT guidelines, ISO 27001 standards, and Critical Information Infrastructure (CII) protection protocols.',
    tools: ['ISO 27001', 'CII Mandate', 'CIS Controls'],
    frameworkAlignment: 'Bangladesh Cybersecurity Act 2023, National CII Directive',
    methodologies: [
      'CII Guideline gap analysis across 29 designated national sectors',
      'Information Security Management System (ISMS) ISO 27001 audit preparation',
      'CIS Critical Security Controls (v8) Implementation Group mapping',
      'Third-party supply chain cyber risk assessment'
    ],
    deliverables: [
      'Formal CII Security Maturity Baseline Assessments',
      'Enterprise Information Security Policy documentation suites',
      'Audit readiness punchlists for regulatory oversight compliance'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fin-sec-2024',
    code: 'CASE // FIN-SEC-2024',
    badge: 'Financial Security',
    category: 'financial',
    title: 'Banking Infrastructure Vulnerability Assessment',
    summary: "Conducted full-scope penetration testing for a commercial bank's mobile application, identifying and patching critical API vulnerabilities.",
    outcomeType: 'Hardened Outcome',
    outcomeValue: 'Zero high-severity vulnerabilities post-remediation',
    outcomeIcon: 'verified',
    threatActors: 'Financially motivated threat groups & credential stuffers',
    vulnerabilitiesPatched: [
      'Broken Object Level Authorization (BOLA / IDOR) in account transfer API',
      'Insecure JWT Token refresh flow with weak key signature',
      'Client-side SSL pinning bypass on legacy Android OS releases',
      'Rate-limiting deficit on OTP authentication endpoint'
    ],
    toolsUsed: ['Burp Suite Pro', 'Frida', 'Postman Security Suite', 'MobSF', 'Nmap'],
    fullWriteup: {
      background: 'A major tier-1 commercial banking institution in Bangladesh required a pre-deployment rigorous penetration audit of their upgraded microservices-backed retail banking mobile app and API gateway prior to processing 500,000+ daily transactions.',
      attackVector: 'During deep inspection of the account management API endpoints, our team identified an authorization discrepancy where modifying the customer GUID in transaction history queries allowed retrieval of arbitrary balance histories without token revocation.',
      technicalExecution: [
        'Instrumented dynamic runtime analysis using Frida hooks to assess client-side cryptography and verify biometric authentication logic integrity.',
        'Simulated MITM intercept testing against the backend TLS termination layer, inspecting all REST payloads for unmasked sensitive PII.',
        'Executed fuzzing against account lookup and transfer confirmation endpoints to detect race conditions and concurrent transfer anomalies.'
      ],
      remediation: 'Engineered an enforced server-side attribute-based access control (ABAC) layer validating active session tokens against account ownership tables. Implemented cryptographic request signing and hardware-backed keystore token storage.'
    }
  },
  {
    id: 'intel-tool-bgd-cirt',
    code: 'INTEL-TOOL // BGD-CIRT',
    badge: 'Threat Intelligence',
    category: 'intel',
    title: 'CIRT Advisory Threat Monitoring Dashboard',
    summary: 'Developed an automated feed aggregator tracking local ransomware threats and critical software advisories relevant to Bangladeshi enterprises.',
    outcomeType: 'Performance Impact',
    outcomeValue: 'Reduced advisory response time by 45%',
    outcomeIcon: 'speed',
    threatActors: 'Ransomware syndicates (LockBit, BlackCat affiliates) targeting South Asian infrastructure',
    vulnerabilitiesPatched: [
      'Zero-day vulnerability lag in regional enterprise patch deployment',
      'Unstructured manual advisory intake workflow delays',
      'Delayed IOC ingestion into perimeter firewalls and EDR agents'
    ],
    toolsUsed: ['Python 3.12', 'MISP Open Threat Sharing', 'Suricata IDS', 'Elasticsearch', 'Docker'],
    fullWriteup: {
      background: 'Enterprises in Bangladesh previously suffered from a 24-48 hour delay between the publication of BGD e-GOV CIRT vulnerability notices and the manual configuration of firewall blocklists.',
      attackVector: 'Threat actors actively weaponized public CVEs within 6 hours of disclosure, targeting unpatched edge VPN concentrators, Exchange servers, and Apache endpoints across national public/private sectors.',
      technicalExecution: [
        'Built an asynchronous crawler and STIX/TAXII pipeline ingesting feeds from BGD e-GOV CIRT, CISA, and regional CERT partners.',
        'Integrated a classification engine tagging threats by severity, affected operating system, and exploitability index.',
        'Created automated export connectors that convert incoming IOCs directly into Suricata rules and IPTables/Palo Alto firewall blocklists.'
      ],
      remediation: 'Decreased threat intelligence dissemination and perimeter rule synchronization from 36 hours down to under 12 minutes, safeguarding over 40 enterprise client networks during critical zero-day waves.'
    }
  },
  {
    id: 'cii-energy-scada',
    code: 'CASE // CII-GRID-2024',
    badge: 'Critical Infrastructure',
    category: 'infrastructure',
    title: 'National Power Distribution SCADA Telemetry Hardening',
    summary: 'Conducted red-team architecture review and network segmentation assessment for a municipal electrical grid SCADA telemetry network in Bangladesh.',
    outcomeType: 'Security Milestone',
    outcomeValue: 'Complete OT/IT air-gap isolation and zero lateral pathways',
    outcomeIcon: 'security',
    threatActors: 'State-sponsored APT groups targeting regional energy grids',
    vulnerabilitiesPatched: [
      'Insecure Modbus/TCP control command exposure across enterprise subnet',
      'Default hardcoded credentials on RTU field units',
      'Absence of jump host MFA on critical substation engineering workstations'
    ],
    toolsUsed: ['Wireshark', 'GrassMarlin', 'Nessus OT', 'Metasploit', 'Zeek OT Parser'],
    fullWriteup: {
      background: 'Bangladesh National Critical Information Infrastructure (CII) directives mandate strict isolation of operational technology (OT) controlling electrical distribution and grid stability.',
      attackVector: 'Identified a bridge interface where administrative enterprise management laptops could route directly to programmable logic controllers (PLCs) on the substation bus without jump-host mediation.',
      technicalExecution: [
        'Passive telemetry capture of Modbus and DNP3 protocols to map all connected industrial automation devices without disrupting grid operations.',
        'Verified firewall rule enforcement between Purdue Model Level 2 (Supervisory Control) and Level 3 (Site Operations).',
        'Simulated targeted credential compromise to assess whether attacker lateral movement could reach the primary turbine circuit trips.'
      ],
      remediation: 'Implemented an enforced unidirectional data diode gateway, instituted hardware-token MFA on all maintenance engineering workstations, and deployed localized anomaly detection sensors.'
    }
  },
  {
    id: 'egov-citizen-portal',
    code: 'AUDIT // E-GOV-2025',
    badge: 'Public Sector Audit',
    category: 'infrastructure',
    title: 'National Citizen Portal Gateway Penetration Test',
    summary: 'Audited citizen identity authentication gateway protecting multi-million national records against SQL injection, data leakage, and DDoS.',
    outcomeType: 'Hardened Outcome',
    outcomeValue: 'Remediated 14 logic bypasses before national rollout',
    outcomeIcon: 'verified_user',
    threatActors: 'Data-harvesting syndicates and automated botnets',
    vulnerabilitiesPatched: [
      'Second-order SQL injection in citizen verification query',
      'Cross-Site Scripting (XSS) in document submission portal',
      'Session fixation during federated Single Sign-On (SSO) redirect'
    ],
    toolsUsed: ['Burp Suite', 'sqlmap', 'OWASP ZAP', 'k6 Load Tester'],
    fullWriteup: {
      background: 'The national public portal enables citizens to access vital records, certificates, and taxation services. High availability and confidentiality are paramount.',
      attackVector: 'A nuanced second-order SQL injection vulnerability was uncovered inside the document verification background queue that was triggered when verifying submitted PDF metadata.',
      technicalExecution: [
        'Employed targeted payload fuzzing to evaluate server-side parser resilience when handling malformed PDF and image attachments.',
        'Analyzed OAuth 2.0 PKCE flow to confirm tokens could not be intercepted by third-party redirect scripts.',
        'Executed simulated 50,000 req/sec stress tests with k6 to audit web application firewall (WAF) rate limiting.'
      ],
      remediation: 'Sanitized input streams using strict parameterized ORM queries, implemented Content Security Policy (CSP) headers with strict nonces, and calibrated Cloudflare Enterprise WAF mitigation rules.'
    }
  }
];

export const SIMULATED_IOC_DATABASE = [
  {
    target: '103.20.15.44',
    type: 'IP Address',
    status: 'MALICIOUS',
    category: 'Ransomware C2 Node',
    details: 'Matched BGD e-GOV CIRT Advisory alert (C2 Beaconing associated with LockBit 3.0 variant). Active port 8443 beaconing.',
    confidence: '99%'
  },
  {
    target: '45.148.10.89',
    type: 'IP Address',
    status: 'SUSPICIOUS',
    category: 'SSH Brute Force Origin',
    details: 'High-frequency port 22 credential probing originating against regional hosting infrastructure in Dhaka.',
    confidence: '88%'
  },
  {
    target: '192.168.1.1',
    type: 'IP Address',
    status: 'CLEAN',
    category: 'Internal Gateway',
    details: 'RFC 1918 Private IPv4 address range. No external threat indicators present.',
    confidence: '100%'
  },
  {
    target: 'invoice_march_cirt.exe',
    type: 'File / Hash',
    status: 'MALICIOUS',
    category: 'Phishing Dropper Trojan',
    details: 'Impersonates national tax clearance notification. SHA-256 match in MISP community database. Injects payload into explorer.exe.',
    confidence: '96%'
  },
  {
    target: 'update.bd-cirt.org',
    type: 'Domain',
    status: 'CLEAN',
    category: 'Legitimate CIRT Service',
    details: 'Verified national security domain with valid DNSSEC and TLS 1.3 cryptographic certificate.',
    confidence: '100%'
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  help             - Show this reference menu
  status           - View Dhaka CII Node defensive posture
  whoami           - Inspect active session role and clearance
  cirt-feed        - Retrieve latest Bangladesh threat advisories
  skills           - Display technical stack & certified toolsets
  audit-summary    - Review conducted audit & mitigation counts
  pgp-key          - Display Tanvir Ahmed PGP 4096-bit public key
  scan <target>    - Run simulated IOC / vulnerability triage on IP or domain
  contact          - View secure transmission endpoints
  clear            - Clear terminal display`,
  
  status: `[+] DHAKA DEFENSE NODE: ACTIVE
[+] UPTIME: 99.98%
[+] REGION: Dhaka, Bangladesh (AP-SOUTH-1)
[+] CII COMPLIANCE: 100% (BGD e-GOV CIRT Alignment)
[+] SYSTEM DEFENSE POSTURE: ELEVATED MONITORING
[+] RECENT MITIGATIONS: 150+ confirmed patches deployed across commercial banking & CII`,

  whoami: `UID=1000(analyst_guest) GID=1000(guest_sec)
ROLE: Security Reviewer / Enterprise Client
PERMISSIONS: Read-Only Audit Telemetry, PGP Transmission Handshake
NODE: dhaka-node-01.tanvir-cybersec.bd`,

  'cirt-feed': `LATEST BGD e-GOV CIRT & REGIONAL THREAT BULLETINS:
1. [ALERT-2024-11] Critical RCE in Enterprise SSL VPN Concentrators (CVE-2024-21887)
   Impact: Financial Services / Enterprise Edge
   Action: Zero-day patch playbook deployed.

2. [ADVISORY-2024-09] Spear-phishing Campaign Impersonating Ministry Documents
   Indicator: Malicious macro doc delivering AsyncRAT
   Action: YARA signature uploaded to MISP database.

3. [BULLETIN-2024-08] Ransomware Actor Lateral Movement in Healthcare Subnets
   Indicator: Impacket WMI execution & SMB credential dumping
   Action: Enforce CIS Benchmark Level 2 controls.`,

  skills: `CORE COMPETENCIES & TOOL MATRIX:
- Offensive Security / VAPT: Burp Suite Pro, Nessus, Nmap, Metasploit, OWASP ZAP
- Threat Hunting & SIEM: Wazuh, Splunk, Suricata IDS, MISP, Zeek
- Digital Forensics & IR: Volatility 3, Wireshark, Autopsy, FTK Imager
- Governance & Compliance: BGD e-GOV CIRT Directives, ISO/IEC 27001, NIST CSF`,

  'audit-summary': `DEFENSE ENGAGEMENT METRICS:
- Total Audits Completed: 40+ Full-Scope Assessments
- Total Patched Flaws: 150+ Vulnerabilities Remediated
- Critical Infrastructure Nodes Hardened: 12 SCADA & Energy Subnets
- Financial Applications Secured: 8 Retail Banking & Payment Gateways`,

  'pgp-key': `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v5.11.0
Comment: Tanvir Ahmed Official Defense Key (Dhaka CII Node)

mQGNBGZZ6nUBDAC/Q3rWb+K0wZ9e1r7t6U7JtKq1vHjZ8fXm0pL4qT2n
Tanvir Ahmed <contact@tanvir-cybersec.bd>
Key ID: 0x8F4E2931A94C72D1 | RSA 4096-bit SHA-512
Fingerprint: B472 90D3 81AA 66E9 54D2  1182 8F4E 2931 A94C 72D1
-----END PGP PUBLIC KEY BLOCK-----`,

  contact: `SECURE COMMUNICATION CHANNELS:
- Direct Email: contact@tanvir-cybersec.bd
- Location: Dhaka, Bangladesh
- LinkedIn: https://linkedin.com/in/tanvir-cybersec
- GitHub: https://github.com/tanvir-cybersec
- PGP Encrypted transmissions accepted via the interactive form below.`
};
