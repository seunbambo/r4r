# Racing for Recovery

## Full project information

See the [project on Notion](https://www.notion.so/whitelabelco/Racing-for-Recovery-d0d400de1bf84ab8a6988d153992c823) for full information including project resources, architecture, tech stack and ticket lifecycle etc.

## Repo organization

This project uses yarn workspaces to host everything we need for Racing for Recovery's mobile app in this one repo.

The `packages` directory will contain workspaces for:

- The mobile app. Workspace name: `mobile-app`.
- The web app (Admin panel for R4R staff). Workspace name: TBD
- Api layer code. Workspace name: `api`

## Deployments

### Notes on Heroku Deployment

The Backend (api package, Strapi) and the client package (Next.JS, for in-browser forgot-/create-password pages) are both deployed to Heroku.
To achieve this, we broadly follow the steps outlined in [this blog post](https://towardsdev.com/deploying-a-monorepo-to-heroku-74c0d5a1f79e).

In summary, we use a [multi procfile buildpack](https://github.com/heroku/heroku-buildpack-multi-procfile), and multiple Procfiles to let each Heroku app know what to do when starting the application. And we use postinstall scripts with config vars to tell Heroku what to do when building the application.

When deploying with Heroku, you may need to change your remote to the relevant app:
E.g. to change to the staging api app:
`heroku git:remote -a cms-staging-racingforrecovery`

### api package (Backend; Strapi)

The Strapi CMS is deployed at the following URLs:

#### Staging: https://cms-staging-racingforrecovery.herokuapp.com/

#### Staging admin: https://cms-staging-racingforrecovery.herokuapp.com/admin

#### Staging api calls are made to: https://cms-staging-racingforrecovery.herokuapp.com/api/<ENDPOINT>

#### Production: https://racingforrecoverycms.herokuapp.com/

#### Production admin: https://racingforrecoverycms.herokuapp.com/admin/

#### Production api calls are made to: https://racingforrecoverycms.herokuapp.com/api/<ENDPOINT>

### client package

Deployed at the following URLs:

#### Staging: https://staging-r4r.herokuapp.com

#### Production: https://production-r4r.herokuapp.com

### Mobile app releases

#### Mobile app variants

There are two variant of the mobile app: staging and production (i.e. the public variant). This allows both variants to be installed on a device at once.
The bundleIdentifier(iOS)/package(Android) names for these variants are:

- staging: `staging.racingForRecovery.app`
- production: `com.racingForRecovery.app`

#### Overview of build process

The `mobile-app` package is built using `eas build`.
When building for use with the staging backend, the build command should include the `platform` option: `eas build --profile staging --platform all`.
Without that prefix, the build will default to using the production backend.

To build, follow the instructions [here](https://docs.expo.dev/build/setup/)
You can use the expo account for simon@wlabel.co for builds (login details for this account are shared in Dashlane) -- See also the section on auto-incrementation of builds below

#### Auto-incrementation of builds:

The app is currently set up to automatically increment the build number based on the value stored on EAS servers (see [Remote Version Source info in the EAS docs here](https://docs.expo.dev/build-reference/app-versions/#examples)). This is fine if you're using the same EAS account for each build (i.e. simon@wlabel.co), but if not you may need to manually set the build number. You can do this with `eas build:version:set` (see also [here](https://docs.expo.dev/build-reference/app-versions/#remote-version-source))

#### Delivery to App Store / Play Console:

Please speak to the Project Manager (Emily) for access to the App Store / Play Console.
The build can be dragged and dropped into Play Console. For the App Store the app can be delivered via [Transporter](https://apps.apple.com/us/app/transporter/id1450874784?mt=12).

## mobile-app workspace

Holds all code for the mobile app (Expo, React Native).
The iOS and Android specific applications. The applications consist of a series of components, screens, routes, and other supporting code.

### Getting the workspace running locally (including locally running backend)

**Note:** This instructions below for the FE use multiple .env.\* files and updates scripts for local development, depending on whether you're testing locally with an iOS simulator or an Android emulator: there's one script to run the app on Android, another script to run on iOS. This is because using the iOS simulator, `localhost` refers to the local machine, but for the Android emulator, you need to use 10.0. 2.2 to access the local machine. The multiple env files are because we're using [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) to allow environment variables for multiple environments.

If not already done, follow the initial steps for installing Expo CLI and Expo Go,[ here](https://docs.expo.dev/get-started/installation/)

- In the `package/mobile-app` package, add three new env files with the following variables (also found in the shared Dashlane secure note named `R4R - DEV - mobile-app .env*`):

  - // .env file:
    BE_BASE_URL=

  - // .env.android file:
    BE_BASE_URL=http://10.0.2.2:1337/api

  - // .env.ios file:
    BE_BASE_URL=http://localhost:1337/api

- With the back end still running, in the project root in a new terminal, start the mobile app in either iOS or Android (see also Extra Notes):
  - To start on iOS: `yarn mobile-app:ios`
  - To start on Android: `yarn mobile-app:android`

* Follow the instructions in your terminal to open the app on mobile using Expo Go.

### Getting the workspace running locally, using Staging or Production backend

If needed, you can run the app locally with calls made to the staging or production backend api as follows:
For use with staging backend: move to the `mobile-app` package and from there run `MY_ENV=staging expo start --clear`
For use with production backend: move to the `mobile-app` package and from there run `expo start --clear`

### Mobile-App Analytics and Bug reporting

- We are using Amplitude for analytics, and Bugsnag for reporting bugs.
- Amplitude is set up using the r4r.services@wlabel.co email (login details in Dashlane). Within this account, there are two seperate projects for staging (called 'R4R Staging') and production (called 'R4R Production'). See [this PR](https://github.com/whitelabelco/racing-for-recovery/pull/354) for more details.
- Bugsnag is also set up using the r4r.services@wlabel.co email (login details in Dashlane). Within this account there are three release stages (local-development, staging and production). See [this PR](https://github.com/whitelabelco/racing-for-recovery/pull/358) for more details.
- For both Amplitude and Bugsnag, env variables for the api keys are added as secrets within EAS

#### Running Bugsnag locally

By default, running the app locally, Bugsnag will not work (this is deliberate to avoid lots of errors being reported during local development), and instead when the app is starting you should initially expect to see warnings about a missing API key in the terminal and warnings that events are not being sent to Bugsnag because of its configuration. However, you can make Bugsnag run locally using the following commands from the project root (you’ll also need to have `BUGSNAG_API=<API KEY IN DASHLANE>` into your `mobile-app/.env` file):

For iOS: `BUGSNAG_API=<API KEY IN DASHLANE>yarn mobile-app:ios:bugsnag`
For Android: `BUGSNAG_API=<API KEY IN DASHLANE> yarn mobile-app:android:bugsnag`

With that approach, you should see errors sent to Bugsnag.

### App structure

From a high-level, the application is structured as a series of components.

We have the following types of components in the app.

- **atoms** (`components/atoms`): A low-level building block component. These should be single-purpose components that make up larger elements. An example of an `atom` is something like a `Button`, `Text Input`, `Card`, `Heading` and other such elements.
- **patterns** (`components/patterns`): A reusable component that is composed of other `atoms` (and `patterns`) is a pattern component. These components are still reusable among many screens but are not screens themselves.
- **screens** (`components/screens`): Represents a Screen in the application. This should consist of existing `patterns`, `atoms`, or contain custom code to represent a screen in the application. The screen is everything between the App Header and the Navigation.

#### Component folder Structure

We are using a structure similar to [Barrels](https://blog.logrocket.com/using-barrel-exports-organize-react-components/) where a folder has an index that serves as a "table of contents" for interacting with a component and a series of supporting items.

For the sake of example, let's assuming we have a folder under `atoms/Button` that represents a `Button` component we'll use in our app. The following files make up the "barrel" (or pseudo-barrel)

- **Button.jsx**: The main React component for `Button`
- `Button.styles.js`: The `styled-component` styles that support the `Button` component
- `Button.stories.jsx`: Storybook stories for the component
- `index.js`: The table of contents for the Button component. The `index` file exports anything that any other element outside of the `Button` folder would interact with

For emphasis, `index.js` should be the only part of `Button` that modules outside of the Button folder import. Anything not exported by the index should be treated as private to the folder and not part of the external interface.

### Static content

Before the CMS is ready, we are adding the content into the app directly. To make it easier to switch over to dynamic content, we should create content objects instead of typing the content into the screen components directly.

An example of this would be something like the following object:

```
{
  heroHeading: "Welcome",
  heroSubheading:
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
  introSection: {
    title: "Who we are",
  },
  introPost: {
    title: "What is Racing for Recovery?",
    imageProps: { imageSource: require("./race.png") },
  },
  ...
}
```

In the Home screen component, we obtain the `content` from a content object and render the nodes of the content object instead of hardcoded text and images. This will make the conversion to the CMS smoother.

#### Getting the workspace running locally

If not already done, follow the initial steps for installing Expo CLI and Expo Go,[ here](https://docs.expo.dev/get-started/installation/)

To start Storybook:

- In `packages/mobile-app/environment.js`, set `const currentConfig = environments.storybook;`
- In the project root, run: `yarn mobile-app`
- Open the app using Expo Go.

## api workspace

Holds the code for the backend (Strapi)

#### Getting the workspace running locally

- In `packages/api`, add a `.env` file. Add the variables in the secure note on Dashlane named `R4R - DEV - API .env`
- Depending on your DB configuration (name, username and password), you may need to add .`env` variables corresponding to those used `packages/api/config/databases.js`
- In `package/api/database`, add a folder named `localImages`, and include the files found in the Google Drive link below. These should be `gitignore`d
  https://drive.google.com/drive/folders/1zI5poSrlQc_WF6R4wdfXJrV6VzDUaNKA?usp=sharing
- In the project root, seed your local database with groups data and related images by running: `yarn api:seed`
  - Seeding will also add image files to your `packages/api/public/uploads` folder, which Strapi uses for media when running locally
  - If you want to clear the local database later, you can run `yarn api:reset` (this will also delete all files from the `uploads` folder)
- In the project root, start Strapi by running one of the following, depending on which you want to test with (the reason for these two scripts is because we're currently still using the local machine for development, and the android emulator uses 10.0. 2.2 to access the local machine; this will change and be simplified when we come to use an upload provider (AWS):
  - For iOS: `yarn api:dev:ios`
  - For android: `yarn api:dev:android`
- Log into the admin panel of Strapi (http://localhost:1337/admin) -- If you're using this for the first time, you should see a 'Welcome to Strapi!' form. Fill it in using your desired credentials to create a local admin account.

#### CMS Settings: Users & Permissions

Certain settings and permissions need to be set-up via Strapi's Admin dashboard.
A list of these permissions/settings can be found in the Wiki:
https://github.com/whitelabelco/racing-for-recovery/wiki/Using-the-CMS

## Troubleshooting

### The mobile app is receiving a packager error, the screen is consistently blank, or receiving generic errors that don't seem to be related directly to the code

You may have to clear all the packager caches for React Native. There is a command for this: in the project root run `yarn clear-caches` [See also this link for more information on what the command does and how to do this manually if needed](https://forums.expo.dev/t/how-to-clear-the-expo-and-react-native-packager-caches-metro-watchman-haste/1352)

If blank screen persist in addition to the above you may run `expo install @react-native-async-storage/async-storage`

## Android Workarounds

### Android crash due to flex-wrap

Crashes have been encountered when `flex-wrap` was used in a styled-component. To workaround this issue, remove the `flex-wrap` property from the styled component and add `style={{ flexWrap: 'wrap' }}` as an inline style on the component that is crashing.
