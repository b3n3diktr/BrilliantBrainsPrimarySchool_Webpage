# Brilliant Brains - Schulwebsite (https://brilliantbrains-uganda.org/home)

## Über das Projekt

Dieses Projekt ist eine Webseite für die "Brilliant Brains Primary and Nursery School" in Uganda. Die Website wurde entwickelt, um eine Freundin zu unterstützen, die ein Auslandsjahr an dieser Schule verbracht hat. Ziel ist es, die Online-Präsenz der Schule zu verbessern und ihre Arbeit mit gefährdeten Kindern bekannter zu machen.

## Funktionen der Website

Die Website bietet folgende Hauptbereiche:

- **Startseite**: Übersicht über die Schule und ihre Mission
- **Projekte**: Informationen zu laufenden und geplanten Schulprojekten
- **Sponsorships**: Möglichkeiten zur finanziellen Unterstützung der Schule
- **Akademisches**: Einblick in das Bildungsangebot und Curriculum der Schule
- **Team**: Vorstellung der Mitarbeiter und Lehrer
- **Geschichte**: Die Entwicklung der Schule seit ihrer Gründung im Jahr 2016
- **Community**: Einblick in das Gemeinschaftsleben und Touren
- **Freiwilligenarbeit**: Informationen für potenzielle Freiwillige

## Technologiestack

Die Website wurde mit folgenden Technologien entwickelt:

- **React 18.3.1**: Frontend-Framework für die Benutzeroberfläche
- **TypeScript 5.5.4**: Für typsicheren JavaScript-Code
- **React Router DOM 6.26.0**: Für das Routing innerhalb der Anwendung
- **Tailwind CSS 3.4.13**: Für das responsive Design
- **Webpack 5.93.0**: Zum Bundling der Anwendung
- **React Icons 5.3.0**: Für die Integration von Symbolen
- **Docker**: Für die Containerisierung der Anwendung

## Deployment

Die Anwendung ist mit Docker konfiguriert und nutzt GitHub Actions für kontinuierliches Deployment.

### Docker

Ein Dockerfile ist im Projekt enthalten, um die Anwendung zu containerisieren.

### CI/CD

Die GitHub-Workflow-Konfiguration in `.github/workflows/docker-deploy.yml` übernimmt den automatisierten Build- und Deployment-Prozess.

### Hosting

Die Website wird auf einem Raspberry Pi selbst gehostet. Für die sichere Bereitstellung im Internet wurde ein Cloudflare Tunnel eingerichtet, der den Traffic verschlüsselt und ohne Port-Weiterleitung an den lokalen Server leitet.

### Domain

Die Domain der Website wird über Cloudflare verwaltet, was zusätzliche Sicherheitsfunktionen, CDN-Optimierung und DDoS-Schutz bietet.
