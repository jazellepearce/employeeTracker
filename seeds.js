INSERT INTO department (department_name)
VALUES
('LEGAL'),
('HR'),
('SALES'),
('FINANCE'),
('RESEARCH'),
('ADVERTISING');

INSERT INTO role_employee (title, salary, department_id)
VALUES
('Sales Person', 45000, 1),
('Lead Engineer', 750000, 2),
('Software Engineer', 10000, 3),
('Account Manager', 150000, 4 ),
('Accountant', 90000, 5),
('Lawyer', 400000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
('Andrews', 'David', 3),
('Blake', 'Denise', 3),
('Greene', 'Victor', 1),
('Santos', 'Manny', 6),
('Ngyuen', 'Hilary', 4),
('Bling', 'Benny', 2),
('Washington', 'Damon', 5);