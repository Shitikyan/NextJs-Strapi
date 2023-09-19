# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

### Environments

HOST is a configuration setting used to specify the host or IP address on which Strapi application will listen for incoming requests. 

PORT configuration setting is used to specify the port number on which Strapi application will listen for incoming HTTP requests.

APP_KEYS is an environment variable used to define the security keys and secrets that are used for various purposes within the application. 

API_TOKEN_SALT is an environment variable used as part of the security measures for generating and validating API tokens.

ADMIN_JWT_SECRET is an environment variable used in Strapi for securing the administrative authentication and authorization system. Strapi is a content management system (CMS) that allows users to create, manage, and publish content, and the admin panel is where administrators or content managers interact with the system.

TRANSFER_TOKEN_SALT is an environment variable used to enhance the security of token generation and validation processes in applications. It is similar in purpose to the API_TOKEN_SALT, but it's specifically related to transfer tokens.

DATABASE_CLIENT is an environment variable used to specify the type or client of the database management system (DBMS) that Strapi application will use for data storage.

DATABASE_FILENAME is an environment variable used to specify the filename and path for the SQLite database when SQLite is chosen as the database client

JWT_SECRET is an environment variable used for configuring JSON Web Tokens (JWT) used in authentication and authorization processes. 

All environments generate automatically after creating a new a Strapi app

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
