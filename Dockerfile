FROM node:lts as dependencies
WORKDIR /tnt-frontend
COPY package.json yarn* ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /tnt-frontend
COPY . .
COPY --from=dependencies /tnt-frontend/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /tnt-frontend
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /tnt-frontend/next.config.js ./
COPY --from=builder /tnt-frontend/public ./public
COPY --from=builder /tnt-frontend/.next ./.next
COPY --from=builder /tnt-frontend/node_modules ./node_modules
COPY --from=builder /tnt-frontend/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
