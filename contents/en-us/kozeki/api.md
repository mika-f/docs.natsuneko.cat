---
title: API
shortTitle: Kozeki REST API
versions:
  - latest
---

You can use simple REST API to read/write any values into key-value stores.

## Endpoint

The base domain for the API is `kozeki.natsuneko.com`, and the API is versioned by the `/v` prefix.
The current API version is 1 and you can access all APs at `https://kozeki.natsuneko.com/v1`.

## Authentication

All API endpoints are requires the authentication by `Authorization` header with access token.
Bearer authentication is performed using the Authorization header for authentication, and the value specified at the time of creation is used for the token.
If your access token is leaked for some reason, you can revoke it by sending a new access token to the account update API.

Generate an access token according to the following format:

```javascript
/^kz-[a-z0-9_-]{32}$/;
```

Example request:

```http
GET https://kozeki.natsuneko.com/v1/users/example/notes/TYO.3663
Content-Type: application/json
Authorization: Bearer kz-a15a862f5cf7415998211991675b868e
```

## Rate Limit

The rate limit is 2,500 requests per IP and user per hour.
Refer to the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` response headers to know when your account approaching to the rate limit, and reset to rate limit.
When your account reached to rate limit, your API return a following response:

```json
{
  "status": 429,
  "message": "too many requests"
}
```

Rate-Limit algorithm uses sliding-window.

Limits:

| tier   | name            | description          |
| ------ | --------------- | -------------------- |
| Tier 1 | Thanks Platinum | 10,000 req/user/hour |
| Tier 2 | Thanks Gold     | 7,500 req/user/hour  |
| Tier 3 | Thanks Silver   | 5,000 req/user/hour  |
| Tier 4 | Thanks Bronze   | 2,500 req/user/hour  |
| Tier 5 | Normal          | 1,000 req/user/hour  |

## Account

### POST /v1/users

create a new user

#### Request Body

| name                      | type    | required | description                                                                                                                                                      |
| ------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| username                  | string  | required | an unique username of this service, rule: `[a-z][a-z0-9-]{1,32}`                                                                                                 |
| access\*token:            | string  | required | an access token used to authenticate, rule: `kz-[a-z0-9*-]{32}`                                                                                                  |
| agree_to_terms_of_service | boolean | required | set to true whether you agree to the terms of service                                                                                                            |
| thanks_code               | string  | optional | set thanks-code when you have it. if it is a valid thanks-code, some limits wll be relaxed. check to [relaxing limits](https://docs.natsuneko.com/kozeki/limits) |

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 409  | Conflict    | this error occurs when unable to use your requested username                              |

### PATCH /v1/users/:username

update user data

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |

#### Request Body

| name         | type   | required | description                                                                                                                                                      |
| ------------ | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| access_token | string | optional | a renewed access token used to authenticate, rule: `kz-[a-z0-1_-]{32}`                                                                                           |
| thanks_code  | string | optional | set thanks-code when you have it. if it is a valid thanks-code, some limits wll be relaxed. check to [relaxing limits](https://docs.natsuneko.com/kozeki/limits) |

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

### DELETE /v1/users/:username

delete a user

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |

#### Request Body

    none

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

## Note

### POST /v1/users/:username/notes

create a new post

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |

#### Request Body

| name        | type    | required | description                                                                       |
| ----------- | ------- | -------- | --------------------------------------------------------------------------------- |
| id          | string  | required | an id for identifying the note. rule: `[a-z][a-z0-9-_.]{1,32}`                    |
| name        | string  | optional | name of the note, default: untitled                                               |
| content     | string  | required | content of the note, up to 10kb                                                   |
| restriction | string  | optional | one of public or private, default: private                                        |
| transaction | boolean | optional | if set to true, updating the note requires a nonce based on the previous content. |

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |
| 409  | Conflict    | this error occurs when unable to create the note because id already exists                |

### GET /v1/users/:username/notes/:note

get a specified post

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |
| note     | string | require  | note id     |

#### Request Body

none

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |
| title   | string | required |
| content | string | required |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

### PATCH /v1/users/:username/notes/:note

update the note metadata

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |
| note     | string | require  | note id     |

#### Request Body

| name        | type    | required | description                                                                       |
| ----------- | ------- | -------- | --------------------------------------------------------------------------------- |
| restriction | string  | optional | one of public or private, default: private                                        |
| transaction | boolean | optional | if set to true, updating the note requires a nonce based on the previous content. |

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

### PUT /v1/users/:username/notes

update a specify post

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |
| note     | string | require  | note id     |

#### Request Body

| name    | type   | required | description                              |
| ------- | ------ | -------- | ---------------------------------------- |
| name    | string | optional | name of the note, default: untitled      |
| content | string | required | content of the note, up to 10kb          |
| nonce   | string | optional | set to nonce when transaction is enabled |

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                                            |
| ---- | ----------- | ------------------------------------------------------------------------------------------------------ |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                                         |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications              |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure                           |
| 409  | Conflict    | this error occurs when unable to update the note because transaction is enabled and nonce is incorrect |

### POST /v1/users/:username/notes/:note/publish

publish the specified note

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |
| note     | string | require  | note id     |

#### Request Body

none

#### Response

| name    | type   | required | description                        |
| ------- | ------ | -------- | ---------------------------------- |
| status  | number | required | HTTP status code                   |
| message | string | required | response message                   |
| secret  | string | required | readonly secret for specified note |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

### DELETE /v1/users/:username/notes/:note

delete a note

#### Request Uri

| name     | type   | required | description |
| -------- | ------ | -------- | ----------- |
| username | string | required | a username  |
| note     | string | require  | note id     |

#### Request Body

none

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |

### GET /v1/publications/:id

get the specified publication

#### Request Uri

| name | type   | required | description    |
| ---- | ------ | -------- | -------------- |
| id   | string | require  | publication id |

#### Request Body

none

#### Response

| name    | type   | required | description      |
| ------- | ------ | -------- | ---------------- |
| status  | number | required | HTTP status code |
| message | string | required | response message |
| name    | string | required |
| content | string | required |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |
| 404  | Not Found   | this error occurs when unable to find requested uri or authenticated failure              |
