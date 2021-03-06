import json
from .base import *

secretFile = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), 'dev.json')

with open(secretFile) as f:
    secrets = json.loads(f.read())

SECRET_KEY = get_secret('SECRET_KEY', secrets)
DEBUG = True
DATABASES = {
    'default': get_secret('DATABASE_CONFIG', secrets)
}
CORS_ORIGIN_WHITELIST = get_secret('CORS_ORIGIN_WHITELIST', secrets)
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_FILE_PATH = '/tmp/emails'
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = False
