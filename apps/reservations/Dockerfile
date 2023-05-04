# node image based on Alpine linux project as development stage
FROM node:alpine As development

# my root work directory
WORKDIR /usr/src/app

# copy these files to work directories
COPY package.json ./
COPY pnpm-lock.yaml ./

# install pnpm and project's dependencies
RUN npm install -g pnpm
RUN pnpm install

# copy everything to the folder
# dockerignore will come into effect
COPY . .

# build nestjs project
RUN pnpm run build



# production stage
FROM node:alpine As production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# copy these files to work directories
COPY package.json ./
COPY pnpm-lock.yaml ./

# install pnpm and project's product dependencies only
RUN npm install -g pnpm
RUN pnpm install --prod

# copy from development stage, dist folder to this dist folder
# With no development dependencies, I can't build it properly, but if it's already built, it can run with minimum dependencies
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/reservations/main"]