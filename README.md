# 🚀 NestJS Mastery: A Practical Code Companion

Welcome! This repository is a collection of self-contained, runnable code examples designed to help you master the **NestJS framework**.

This project is the official code companion to the NestJS workshop.
It's designed to be a practical, hands-on guide where you can run the code for each topic individually.

---

## 📖 How to Use This Repository

This repository is a **monorepo of examples**. Each numbered folder is a separate, self-contained, and runnable NestJS project.

This means you **do not** run `npm install` in the root folder. Instead, you run each example individually.

### To run any example:

1.  Clone this repository:
    ```bash
    git clone [https://github.com/AliaksandrBadretdzinau/nest-cookbook.git](https://github.com/AliaksandrBadretdzinau/nest-cookbook.git)
    ```
2.  Navigate into a specific topic's folder:
    ```bash
    cd 20-config-service
    ```
3.  Install the dependencies for that example:
    ```bash
    npm install
    ```
4.  Run the project:
    ```bash
    npm run start:dev
    ```

Each topic folder also contains its own `README.md` with detailed explanations, code highlights, and instructions specific to that lesson.

---

## 📚 Syllabus: All NestJS Topics

Here are all the topics covered, from core concepts to advanced patterns.

* [**🏛️ 01. Modules**](./01-modules/README.md) 

    Organize your app into feature boundaries. Group controllers, services, and providers logically.

* [**⚔️ 02. Controllers**](./02-controllers/README.md)

    Handle incoming HTTP requests. Define routes and map them to service logic.

* [**💡 03. Providers & DI**](./03-providers-and-di/README.md)
    
    Core business logic and shared services. Injectable classes managed by Nest’s DI container.

* [**🧩 04. Request-Scoped Providers**](./04-request-scoped-providers/README.md)

    Per-request instances. Create unique service instances per request for logs or tracing.

* [**🧬 05. Lifecycle Hooks**](./05-lifecycle-hooks/README.md)

    Initialization & shutdown control. Run setup or teardown logic via hooks like `OnModuleInit`.

* [**🌊 06. Pipes & Filters**](./06-pipes-and-filters/README.md)

    Validation & error handling. Transform input, validate data, and catch exceptions.

* [**🌍 07. Global Filters**](./07-global-filters/README.md)

    App-wide exception handling. Centralize error handling with global filters using `APP_FILTER`.

* [**⚙️ 08. Middleware**](./08-middleware/README.md)

    Pre-route logic. Execute logic before requests reach controllers (logging, parsing, auth checks).

* [**🛡️ 09. Guards & Interceptors**](./09-guards-and-interceptors/README.md)

    Auth & response manipulation. Control access (`CanActivate`) and modify responses (`NestInterceptor`).

* [**🧱 10. Persistence (TypeORM / MikroORM)**](./10-persistence-typeorm/README.md)

    Database integration. Manage entities, relations, and migrations.

* [**💾 11. Caching**](./11-caching/README.md)

    Performance optimization. Cache responses or computed data with in-memory or Redis backends.

* [**📂 12. File Uploads**](./12-file-uploads/README.md)

    Handle file and image uploads. Use Multer-based interceptors for single or multiple file uploads.

* [**🔮 13. GraphQL**](./13-graphql/README.md)

    Flexible, typed data fetching. Build schema-driven APIs with resolvers, queries, and mutations.

* [**🔐 14. Auth + JWT**](./14-auth-jwt/README.md)

    Secure APIs. Protect routes using JWT, Guards, and Passport strategies.

* [**📡 15. WebSockets**](./15-websockets/README.md)

    Real-time updates. Communicate bi-directionally using `@WebSocketGateway()`.

* [**⚙️ 16. Microservices**](./16-microservices/README.md)

    Async communication. Connect distributed services via message patterns (TCP, Redis, NATS).

* [**🧠 17. Event Emitters**](./17-event-emitters/README.md)

    In-app asynchronous events. Emit and listen to domain events within the app without tight coupling.

* [**🧪 18. Testing**](./18-testing/README.md)

    Unit & E2E tests. Validate logic and endpoints using Jest and Nest’s `TestingModule` utilities.

* [**👁️ 19. Observability**](./19-observability/README.md)

    Health, metrics, monitoring. Add `/healthz`, metrics, and structured logs for visibility.

* [**📜 20. Config Service**](./20-config-service/README.md)

    Centralized configuration. Manage `.env` files, environment variables, and validate them with Joi.

---

## 🤝 Contributing

Find an issue, a typo, or have an improvement? Feel free to open an Issue or submit a Pull Request!

## 📜 License

This project is licensed under the **MIT License**.
