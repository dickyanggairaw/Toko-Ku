# Toko Ku

### login
#### status 200
#### req.body
```json
  {
    "username": "<username>",
    "password": "<password>"
  }
```
#### Success
```json
  {
    "acccess_token": "<acccess_token>",
    "role": "<role>"
  }
```

### Change Password
#### status 200
#### req.body
```json
  {
    "password": "<password>"
  }
```
#### Success
```json
  {
    "message": "<message>"
  }
```

### create Product
#### status 201
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### req.body
```json
  {
    "title": "<title>",
    "type": "<type>",
    "description": "<description>",
    "harga_modal": "<harga_modal>",
    "harga_jual": "<harga_jual>",
    "stock": "<stock>"
  }
```
#### Success
```json
  {
    "_id": "<_id>",
    "title": "<title>",
    "type": "<type>",
    "description": "<description>",
    "harga_modal": "<harga_modal>",
    "harga_jual": "<harga_jual>",
    "stock": "<stock>"
  }
```

### add Stock Product
#### status 200
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### req.params
```json
  {
    "id": "<id>"
  }
```
#### req.body
```json
  {
    "stock": "<stock>"
  }
```
#### Success
```json
  {
    "message": "<message>"
  }
```

### get Product
#### status 200
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```

#### Success
```json
  [
    {
      "_id": "<_id>",
      "title": "<title>",
      "type": "<type>",
      "description": "<description>",
      "harga_modal": "<harga_modal>",
      "harga_jual": "<harga_jual>",
      "stock": "<stock>"
    }
  ]
```

### create Transaction
#### status 201
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### req.body
```json
  {
    "id": "<id>"
  }
```
#### Success
```json
  {
    "_id": "<_id>",
    "title": "<title>",
    "type": "<type>",
    "description": "<description>",
    "harga_modal": "<harga_modal>",
    "harga_jual": "<harga_jual>",
    "stock": "<stock>"
  }
```

### get All Transaction
#### status 201
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### Success
```json
  [
    {
      "_id": "<_id>",
      "title": "<title>",
      "type": "<type>",
      "description": "<description>",
      "harga_modal": "<harga_modal>",
      "harga_jual": "<harga_jual>",
      "stock": "<stock>"
    }
  ]
```

### create History
#### status 201
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### req.body
```json
  {
    "total": "<total>",
    "total_modal": "<total_modal>",
    "laba": "<laba>"
  }
```
#### Success
```json
  {
  "transactions": [
    {
      "_id": "<_id>",
      "title": "<title>",
      "type": "<type>",
      "description": "<description>",
      "harga_modal": "<harga_modal>",
      "harga_jual": "<harga_jual>",
      "stock": "<stock>"
    }
  ],
  "_id": "<_id>",
  "total": "<total>",
  "tanggal": "<tanggal>",
  "total_modal": "<total_modal>",
  "laba": "<laba>",
  }
```

### get History
#### status 200
#### req.headers
```json
  {
    "access_token": "<access_token>"
  }
```
#### req.body
```json
  {
    "start": "<date>",
    "end": "<date>"
  }
```
#### Success
```json
  [
    {
    "transactions": [
      {
        "_id": "<_id>",
        "title": "<title>",
        "type": "<type>",
        "description": "<description>",
        "harga_modal": "<harga_modal>",
        "harga_jual": "<harga_jual>",
        "stock": "<stock>"
      }
    ],
    "_id": "<_id>",
    "total": "<total>",
    "tanggal": "<tanggal>",
    "total_modal": "<total_modal>",
    "laba": "<laba>",
    }
  ]
```