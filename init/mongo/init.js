db.auth('admin', 'adminpass')

db = db.getSiblingDB('converter_db');

db.createUser({
  user: 'converter_user',
  pwd: 'converter_pass',
  roles: [
    {
      role: 'readWrite',
      db: 'converter_db'
    }
  ]
});

// Создаем коллекции
db.createCollection('conversions');
db.createCollection('conversion_templates');

// Создаем индексы
db.conversions.createIndex({ "userId": 1 });
db.conversions.createIndex({ "createdAt": 1 });