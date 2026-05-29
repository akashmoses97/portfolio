# Missing Skill Logos

Drop SVG or PNG files into this folder (`public/logos/skills/`).
The filename must match the `logo` key in `categories.json` exactly (case-sensitive).
SVG is preferred. PNG works too — just rename it to `{logo}.png`.

The component tries this folder first, then SimpleIcons CDN, then falls back to text initials.

---

## Databases

| Skill | Filename | Official source |
|---|---|---|
| Oracle DB | `ora.svg` | https://www.oracle.com/webfolder/technetwork/jet/images/logo/oracle-logo.png — or search "Oracle logo SVG" |
| Amazon Aurora | `aur.svg` | AWS icon set → https://aws.amazon.com/architecture/icons/ |
| IBM DB2 | `db2.svg` | IBM brand page → https://www.ibm.com/design/language/iconography/ui-icons/library/ |
| Sybase | `syb.svg` | SAP brand → search "SAP Sybase logo SVG" |
| ADLDS | `ad.svg` | Microsoft Active Directory logo → search "Microsoft Active Directory icon SVG" |

## Identity & Access

| Skill | Filename | Official source |
|---|---|---|
| OAuth 2.0 | `oauth.svg` | https://oauth.net — logo on that page |
| OIDC | `oidc.svg` | https://openid.net/developers/how-connect-works/ — OpenID logo |
| SAML / SSO | `saml.svg` | OASIS logo or generic SSO icon |
| RBAC | `rbac.svg` | No official logo — use any role/shield icon SVG |
| PingFederate | `ping.svg` | Ping Identity → https://www.pingidentity.com/en/resources/brand.html |
| ADFS | `adfs.svg` | Microsoft logo or Azure AD icon from https://learn.microsoft.com/en-us/entra/identity/branding/ |
| Transmit Security | `tsec.svg` | https://transmitsecurity.com — grab from their site |
| CyberArk | `cark.svg` | https://www.cyberark.com — logo in footer/header |
| KMS / Secrets | `kms.svg` | AWS KMS icon from https://aws.amazon.com/architecture/icons/ |

## Cloud & DevOps

| Skill | Filename | Official source |
|---|---|---|
| CI/CD | `ci.svg` | Generic — any CI/CD pipeline icon SVG |

## Frameworks & APIs

| Skill | Filename | Official source |
|---|---|---|
| REST APIs | `api.svg` | Generic — no official logo |
| Microservices | `ms.svg` | Generic — no official logo |

## Languages

| Skill | Filename | Official source |
|---|---|---|
| SQL | `sql.svg` | Generic — no official logo, use any database/query icon |

## Quality & Observability

| Skill | Filename | Official source |
|---|---|---|
| AppDynamics | `appd.svg` | Cisco AppDynamics → https://www.appdynamics.com/brand |
| Mockito | `mck.svg` | https://site.mockito.org — Mockito logo on that page |

## AI & LLM

| Skill | Filename | Official source |
|---|---|---|
| LLM APIs | `llm.svg` | Generic — no official logo |
| Prompt Eng. | `prm.svg` | Generic — no official logo |

---

## Already working (no action needed)

These already load from SimpleIcons CDN automatically:

Java, Python, C++, TypeScript, JavaScript, Shell Scripting,
Spring Boot, Spring Security, Spring Batch, FastAPI, ReactJS, Apache Kafka,
AWS, Docker, Kubernetes, Jenkins, Cloud Foundry, Apache Tomcat, Liquibase,
PostgreSQL, MySQL,
HuggingFace, Anthropic Claude, GitHub Copilot,
Splunk, SonarQube, Snyk, JUnit, Git, Jira, Bitbucket
