---
title: API
shortTitle: Public REST API
versions:
  - latest
---

## Endpoint

The base domain for the API is `api.natsuneko.com`, and the API is versioned by the `/v` prefix.
For example, the current API version is and you can access all APs at `https://api.natsuneko.com/:service/v1`.

## Authentication

Public API endpoints are available without any authentication.  
If you want to prove your identity to the our Public API, you can also provide an `Authorization` header with an access token.
Example request:

```http
# without access token
GET https://api.natsuneko.com/catalyst/v1/status/3c6de470-c7ac-4af0-8d74-7c8849baf077
Content-Type: application/json

# with access token
GET https://api.natsuneko.com/catalyst/v1/status/3c6de470-c7ac-4af0-8d74-7c8849baf077
Content-Type: application/json
Authorization: Bearer kz-a15a862f5cf7415998211991675b868e
```

## Catalyst

Catalyst is the VR-Photo Sharing Platform by Natsuneko Laboratory.

### GET /catalyst/v1/reactions

get available reactions on Catalyst

#### Request Query Parameters

None

#### Response

| name   | type   | required | description                                |
| ------ | ------ | -------- | ------------------------------------------ |
| id     | string | required | reaction id                                |
| name   | string | required | reaction name                              |
| symbol | string | required | reaction unique symbol (`/^[a-z0-9_-]+$/`) |
| url    | string | required | reaction image url                         |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
// GET https://api.natsuneko.com/catalyst/v1/reactions
[
  {
    "id": "17519d91-f549-442f-b720-be5d7c717aaf",
    "name": "Cherry Blossom",
    "symbol": "cherry_blossom",
    "url": "https://static.natsuneko.com/images/reactions/cherry_blossom.png"
  }
  // ...
]
```

### GET /catalyst/v1/smart-album/search

search public smart albums on Catalyst

#### Request Query Parameters

| name | type   | required | description                   |
| ---- | ------ | -------- | ----------------------------- |
| q    | string | required | search query with url encoded |

#### Response

| name        | type              | required | description                                                      |
| ----------- | ----------------- | -------- | ---------------------------------------------------------------- |
| id          | string            | required | smart album id                                                   |
| name        | string            | required | smart album name                                                 |
| description | string            | required | smart album description                                          |
| isAllowNsfw | boolean           | required | is allow nsfw content                                            |
| isPublic    | boolean           | required | is public smart album, always `true` on Public API               |
| since       | ISO8601DateString | optional | start time of aggregation period of smart album                  |
| until       | ISO8601DateString | optional | end time of aggregation period of smart album                    |
| user        | User              | required | user information of the smart album owner                        |
| statuses    | Status[]          | required | status information of the smart album, up to 3 statuses returned |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
// GET https://api.natsuneko.com/catalyst/v1/smart-album/search?q=めいゆん
{
  "albums": [
    {
      "id": "clz15sjfc0002j2scmlq2fj6y",
      "name": "ねこめいゆん",
      "description": "夏猫のめいゆんちゃん",
      "isAllowNsfw": false,
      "isAllowOthers": false,
      "isPublic": true,
      "since": null,
      "until": null,
      "user": {
        "id": "579bc950-6e58-49e8-8658-ebfb2853fddb",
        "screenName": "natsuneko",
        "displayName": "夏猫",
        "profile": {
          "iconUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/ca5e6b20-6624-4d23-84e0-45293b3d9bf6",
          "bannerUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/74186696-5131-4b42-83f8-e6b55a62f858",
          "bio": "なつねこさんだよ？",
          "website": "https://natsuneko.com",
          "additionalWebsites": []
        }
      },
      "statuses": [
        {
          "id": "5787a156-f39e-4a6e-8d5b-7f29a5c38be3",
          "body": "#めいゆん ちゃん集会でした！",
          "createdAt": "2024-11-24T04:01:22.447Z",
          "user": {
            "id": "579bc950-6e58-49e8-8658-ebfb2853fddb",
            "screenName": "natsuneko",
            "displayName": "夏猫",
            "profile": {
              "iconUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/ca5e6b20-6624-4d23-84e0-45293b3d9bf6",
              "bannerUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/74186696-5131-4b42-83f8-e6b55a62f858",
              "bio": "なつねこさんだよ？",
              "website": "https://natsuneko.com",
              "additionalWebsites": []
            }
          },
          "medias": [
            {
              "id": "64cecb67-2ee9-426a-b87f-247dba3f6a54",
              "alt": "",
              "url": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/b437d6fc-bfab-4edb-a92e-9d33b063d585",
              "metadata": {
                "width": 3840,
                "height": 2160,
                "isSensitive": false
              }
            }
            // ...
          ],
          "reactions": [],
          "contest": null
        }
        // ...
      ]
    }
    // ...
  ]
}
```

### GET /catalyst/v1/status/:id

get the specific status on Catalyst

#### Request Query Parameters

None

#### Response

| name   | type   | required | description |
| ------ | ------ | -------- | ----------- |
| status | Status | required | status      |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
// GET https://api.natsuneko.com/catalyst/v1/status/5787a156-f39e-4a6e-8d5b-7f29a5c38be3?_rsc=9eisu
{
  "status": {
    "id": "5787a156-f39e-4a6e-8d5b-7f29a5c38be3",
    "body": "#めいゆん ちゃん集会でした！",
    "createdAt": "2024-11-24T04:01:22.447Z",
    "user": {
      "id": "579bc950-6e58-49e8-8658-ebfb2853fddb",
      "screenName": "natsuneko",
      "displayName": "夏猫",
      "profile": {
        "iconUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/ca5e6b20-6624-4d23-84e0-45293b3d9bf6",
        "bannerUrl": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/74186696-5131-4b42-83f8-e6b55a62f858",
        "bio": "なつねこさんだよ？",
        "website": "https://natsuneko.com",
        "additionalWebsites": []
      }
    },
    "medias": [
      {
        "id": "64cecb67-2ee9-426a-b87f-247dba3f6a54",
        "alt": "",
        "url": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/b437d6fc-bfab-4edb-a92e-9d33b063d585",
        "metadata": {
          "width": 3840,
          "height": 2160,
          "isSensitive": false
        }
      },
      {
        "id": "5cffec49-2a84-48b8-b67b-73ef17c3a719",
        "alt": "",
        "url": "https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/09a4a061-9c3e-44a2-bde6-16f1576b3166",
        "metadata": {
          "width": 3840,
          "height": 2160,
          "isSensitive": false
        }
      }
    ],
    "reactions": [],
    "contest": null
  }
}
```

### GET /catalyst/v1/status/:id/reactions

get the specific status on Catalyst

#### Request Query Parameters

None

#### Response

| name               | type    | required | description                                   |
| ------------------ | ------- | -------- | --------------------------------------------- |
| reactions          | object  | required | reactions                                     |
| - \[symbol]        | object  | required | reaction                                      |
| -- count           | number  | required | reaction count                                |
| -- hasSelfReaction | boolean | required | has self reaction, always false on Public API |
| -- name            | string  | required | reaction name                                 |
| -- symbol          | string  | required | reaction symbol                               |
| -- url             | string  | required | reaction image url                            |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
// GET https://api.natsuneko.com/catalyst/v1/status/3c6de470-c7ac-4af0-8d74-7c8849baf077/reactions
{
  "reactions": {
    "sparkling_heart": {
      "count": 2,
      "hasSelfReaction": false,
      "name": "Sparkling Heart",
      "symbol": "sparkling_heart",
      "url": "https://static.natsuneko.com/images/reactions/sparkling_heart.png"
    }
  }
}
```

### GET /catalyst/v1/timeline/firehose

get the global firehose timeline, all statuses are returned in the order of creation, without sensitive statuses

#### Request Query Parameters

| name  | type   | required | description                     |
| ----- | ------ | -------- | ------------------------------- |
| since | string | optional | status id of aggregation period |
| until | string | optional | status id of aggregation period |

#### Response

| name     | type     | required | description |
| -------- | -------- | -------- | ----------- |
| statuses | Status[] | required | statuses    |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
{
  "statuses": [
    {
      "id": "80601b6a-1ef9-4d2a-a586-827c4f993e52",
      "body": "",
      "createdAt": "2024-12-23T08:52:07.367Z",
      "user": {
        "id": "2ad8ee7a-22bf-4676-bbf3-a6477c0707ab",
        "screenName": "kokoa",
        "displayName": "kokoa",
        "profile": {
          "iconUrl": "https://cdn.natsuneko.com/images/2ad8ee7a-22bf-4676-bbf3-a6477c0707ab/79c5ed52-c9fa-4042-a29b-6cda7bd479ba",
          "bannerUrl": "https://cdn.natsuneko.com/images/8179f7e3-fcad-4b90-cd45-462d71d12000",
          "bio": "",
          "website": "",
          "additionalWebsites": []
        }
      },
      "medias": [
        {
          "id": "63d2bb3b-1c92-4993-ae98-3019c3218869",
          "alt": "",
          "url": "https://cdn.natsuneko.com/images/2ad8ee7a-22bf-4676-bbf3-a6477c0707ab/25548637-0fc9-4bd2-aa9a-b7c89dc2c8ab",
          "metadata": {
            "width": 1640,
            "height": 920,
            "isSensitive": false
          }
        }
      ],
      "reactions": [],
      "contest": null
    }
    // ...
  ]
}
```

### GET /catalyst/v1/timeline/gallery

get the global firehose timeline for gallery view, all statuses are returned in the order of creation, without sensitive statuses.
this API returns same result of `/catalyst/v1/timeline/firehose` but status will be trimmed/clone per media.

#### Request Query Parameters

| name  | type   | required | description                     |
| ----- | ------ | -------- | ------------------------------- |
| since | string | optional | status id of aggregation period |
| until | string | optional | status id of aggregation period |

#### Response

| name     | type     | required | description |
| -------- | -------- | -------- | ----------- |
| statuses | Status[] | required | statuses    |

#### HTTP Response Code

| code | message     | description                                                                               |
| ---- | ----------- | ----------------------------------------------------------------------------------------- |
| 200  | OK          |
| 400  | Bad Request | this error occurs when there is some mistakes in your request.                            |
| 403  | Forbidden   | this error occurs when unable to process your requests due to its terms or specifications |

#### Example

```jsonc
{
  "statuses": [
    {
      "id": "80601b6a-1ef9-4d2a-a586-827c4f993e52",
      "body": "",
      "createdAt": "2024-12-23T08:52:07.367Z",
      "user": {
        "id": "2ad8ee7a-22bf-4676-bbf3-a6477c0707ab",
        "screenName": "kokoa",
        "displayName": "kokoa",
        "profile": {
          "iconUrl": "https://cdn.natsuneko.com/images/2ad8ee7a-22bf-4676-bbf3-a6477c0707ab/79c5ed52-c9fa-4042-a29b-6cda7bd479ba",
          "bannerUrl": "https://cdn.natsuneko.com/images/8179f7e3-fcad-4b90-cd45-462d71d12000",
          "bio": "",
          "website": "",
          "additionalWebsites": []
        }
      },
      "medias": [
        {
          "id": "63d2bb3b-1c92-4993-ae98-3019c3218869",
          "alt": "",
          "url": "https://cdn.natsuneko.com/images/2ad8ee7a-22bf-4676-bbf3-a6477c0707ab/25548637-0fc9-4bd2-aa9a-b7c89dc2c8ab",
          "metadata": {
            "width": 1640,
            "height": 920,
            "isSensitive": false
          }
        }
      ],
      "reactions": [],
      "contest": null
    }
    // ...
  ]
}
```

## Egeria

### GET /egeria/v0/identicon/:id

get the identicon image for the specific id

#### Request Query Parameters

None

#### Response

The image will be returned as a binary stream.

## Media

The API returns media information including URL and metadata, but the image URL must include variant information at the end.
For example, to get the correct image, you can add the following:

```http
GET https://cdn.natsuneko.com/images/579bc950-6e58-49e8-8658-ebfb2853fddb/b3c7b0e4-d36e-4414-8b93-e6733508f705/:variant
```

### Variant

| name      | size      | object-fit | description                                       |
| --------- | --------- | ---------- | ------------------------------------------------- |
| header    | 1500x500  | scale down | user header                                       |
| large     | 4096x4096 | scale down | large image, for preview in details               |
| medium    | 2048x2048 | scale down | medium image, for preview in timeline             |
| ogp       | 1200x630  | cover      | Open Graph Protocol image                         |
| original  | 9999x9999 | scale down | original image, for download and full-screen view |
| small     | 1024x1024 | scale down | small image, for preview in gallery               |
| thumbnail | 512x512   | crop       | for uploading thumbnail                           |
| tiny      | 256x256   | crop       | tiny image, for user icons                        |
| xlarge    | 8192x8192 | scale down | extra large image, for preview in details         |
| small     | 512x512   | scale down | small image, for preview in gallery               |

## Object

### `ISO8601DateString`

[ISO 8601](https://www.wikiwand.com/ja/articles/ISO_8601) formatted date string.

### `Media`

The media, with URL and metadata.
If the media is sensitive, the `isSensitive` field will be `true`.

| name          | type    | required | description        |
| ------------- | ------- | -------- | ------------------ |
| id            | string  | required | media id           |
| alt           | string  | required | media alt text     |
| url           | string  | required | media url          |
| metadata      | object  | optional | media metadata     |
| - width       | number  | optional | media width        |
| - height      | number  | optional | media height       |
| - isSensitive | boolean | required | is media sensitive |

### `Status`

The status information, with body, user, and media information.
If you specify `trim_user=true` in the query, the user information will be omitted.

| name      | type              | required | description                          |
| --------- | ----------------- | -------- | ------------------------------------ |
| id        | string            | required | status id                            |
| body      | string            | required | status body, markdown formatted      |
| createdAt | ISO8601DateString | required | status created date                  |
| user      | User              | optional | user information of the status owner |
| medias    | Media[]           | required | media information of the status      |

### `User`

The user information, with screen name, display name, profile, and additional websites.

| name                 | type     | required | description              |
| -------------------- | -------- | -------- | ------------------------ |
| id                   | string   | required | user id                  |
| screenName           | string   | required | user screen name         |
| displayName          | string   | required | user display name        |
| profile              | object   | optional | user profile information |
| - iconUrl            | string   | required | user icon url            |
| - bannerUrl          | string   | required | user banner url          |
| - bio                | string   | required | user bio                 |
| - website            | string   | required | user website             |
| - additionalWebsites | string[] | required | user additional websites |
