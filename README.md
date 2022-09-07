Signup --- doesNotMatch
Last 10 login Users -- DONE
Salary condition (3 tax lab <5 lakh 10%  5-10 20, 10 above 30) --- DONE 
top and bottom  3 salary taken  --- DONE 
LOGIN -- DONE 


CreateUser: POST
http://localhost:8000/api/createUser
{
    "userId": "manojksl564",
    "userPassword": "65656dfsdf4",
    "name": "Manoj",
    "salary":600000,
    "email": "manojs@gmail.com"
}


LoginUser: POST

http://localhost:8000/api/loginUser
{
    "userId": "manojksl564",
    "userPassword": "65656dfsdf4"
}


LastLogin: GET

http://localhost:8000/api/lastLogin


Top Salary Taker:

http://localhost:8000/api/topSalary
{
    "order":"ASC"
}

or 


{
    "order":"DESC"
}







Two Table in Database

select * from users 
 
select * from logs 


users and logs
--------------------------------------------------------------------------------------------------------------------------------------------
Logs table 
[
  RowDataPacket {
    Field: 'time',
    Type: 'bigint(20)',
    Null: 'NO',
    Key: 'PRI',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'userId',
    Type: 'varchar(20)',
    Null: 'NO',
    Key: '',
    Default: null,
    Extra: ''
  }
]

--------------------------------------------------------------------------------------------------------------------------------------------
users table:
[
  RowDataPacket {
    Field: 'userId',
    Type: 'varchar(20)',
    Null: 'NO',
    Key: 'PRI',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'name',
    Type: 'varchar(20)',
    Null: 'YES',
    Key: '',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'email',
    Type: 'varchar(20)',
    Null: 'YES',
    Key: '',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'password',
    Type: 'varchar(100)',
    Null: 'YES',
    Key: '',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'salary',
    Type: 'int(11)',
    Null: 'YES',
    Key: '',
    Default: null,
    Extra: ''
  },
  RowDataPacket {
    Field: 'tax',
    Type: 'int(11)',
    Null: 'YES',
    Key: '',
    Default: null,
    Extra: ''
  }
]

--------------------------------------------------------------------------------------------------------------------------------------------


users :
{
    "userId": "vinod434s",
    "userPassword": "12345689",
    "name": "Vinod",
    "salary":5000,
    "email": "vinod@gmail.com"
}

{
    "userId": "manojksl564",
    "userPassword": "65656dfsdf4",
    "name": "Manoj",
    "salary":600000,
    "email": "manojs@gmail.com"
}

