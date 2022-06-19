## flying
Make life more automatical.

### Create nginx logs

```
touch webapp/log/nginx.access.log
touch webapp/log/nginx.error.log
```

### Generate secret key and put it into docker-compose.yml

```
RAILS_ENV=production rake secret
```