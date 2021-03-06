# Schema Design and REST

## Lecture

- [Recording](https://us02web.zoom.us/rec/share/tkpNpfOz_BA62Ql-UQ3ymXoZ97nxwkpFjqMSaYjV5r0hucqFdiiuYekiVKUJEFwb.RvZrMwoYCciSiimV)
- [Recording](https://us02web.zoom.us/rec/share/ksdDQxOCmPhsmM3lgr0JrM42t_v676DWnLX2DVfbr2HE58VCjvPaYa0oza6NdeM8.145daFK7TdioyEfo)

### Key Terms:

- REST
- [Domain Modeling](https://olegchursin.medium.com/a-brief-introduction-to-domain-modeling-862a30b38353)
- Relationships (School as example)
  - One To Many Relationship (school **has many** students)
  - Many To One (student **has one** one school)
  - One to One (student can sit at one desk & one desk can seat only one student)
  - Many to Many (a student can enroll in many courses, and courses can have many students)
- Schema Design
- Entity relationships

School as example,

### Essential Questions:

- What are some of the important tradeoffs to consider when doing domain modeling?
- What is REST? Why is this important for web applications?
- What's the difference between a one-to-one, one-to-many and many-to-many relationship? How do we model those using SQL?

### Learning Assignments:

- **Article** (_Review_):[How to Handle Many-to-Many Relationships](https://dzone.com/articles/how-to-handle-a-many-to-many-relationship-in-datab)
- **Video:** [REST API Overview](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
- **Article:** [Restful Routes Overview](https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb)
- **Article:** [SQL Injection](https://www.w3schools.com/sql/sql_injection.asp)
- **Article** (_Optional_):[Roy Fielding's Dissertation on REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) - Roy Fielding authored this paper while working on a graduate degree - feel free to peruse it. It can be a bit dry, but includes some interesting tidbits. In many ways, the beauty behind REST is in it's simpilcity

### Practice:

1. [Setting up a RESTful API with Node.js and PostgreSQL](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)
2. [Practice Exercises](./practice/exercises.md)
