### Concepts

- [ ] main aims:
  - automatic DB schema creation/synchronisation/migration/access/management
  - strongly-typed DB access and manipulation (with TypeScript)

- [ ] basic tables with a PK column 'id', and a list of other columns

- [ ] annotations/decorators
  - column basic datatype
  - primary key
  - nullable
  - readonly / getter
  - json column
  - unique
  - part of alternate key
  - virtual/computed/cached etc

- [ ] in-DB metadata:
  - see current tabular impl
  - table/column display names
  - column order
  - ???

- [ ] table relationship 'is-a':
  - e.g. A1 extends A
  - A1's PK is a unique nonnull FK to A's PK
  - e.g. User {name}, PowerUser extends User {caps}

- [ ] table relationship 'has-a':
  - e.g. Customer has 0..M CustomerOrder, CustomerOrder has 1 Customer
  - implies cascading delete, update, etc (FK relationship)

- [ ] table relationship 'refs-a':
  - e.g. OrderLine refs a Product
  - implies referential integrity checks (FK relationship)

- [ ] automatic schema management, code generation, migrations, validations

- [ ] virtual tables

- [ ] views (incl joins)

- [ ] virtual/computed columns

- [ ] DB querying (select)
  - do all complex stuff in views / virtual tables / virtual columns
  - queries ONLY:
    - filter columns by name
    - filter rows by simple cell exprs
    - paginate
    - group? aggregate?

- [ ] DB manipulation (create/update/delete)

- [ ] DDL support? i.e. dynamically modifying table/column schemas?
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 



### API

```ts
// prefer strong-typing everywhere!

dp.registerTables(...)

dp.verifySchema(...)
dp.migrateSchema(...)


dp.query(...)


dp.update
dp.delete
dp.create



tableX.select()
    .allOf(
        anyOf(
            equals(

            )
        ),
        includes(
            
        )
    )

```
