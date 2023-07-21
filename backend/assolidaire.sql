DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id int primary key NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO categories (name)
VALUES
 (
    'Ecologie'
 ),
 (
    'Patrimoine'
 ),
 (
    'Pauvreté'
 ),
 (
    'Santé'
 );

 DROP TABLE IF EXISTS assos;

CREATE TABLE assos (
    id int primary key NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    src varchar(255) NOT NULL,
    lien longtext NOT NULL,
    cat_id int NOT NULL,
    CONSTRAINT fk_categories FOREIGN KEY (`cat_id`)
    REFERENCES `categories` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO assos (name, src, lien, cat_id)
VALUES
 (
    'Greenpeace',
    'src/assets/ecologie/greenpeace.jpg',
    'https://faire-un-don.greenpeace.fr/?codespec=7010N000000XjfO',
    1
 ),
 (
    'LPO',
    'src/assets/ecologie/LPO-env.png',
    "https://www.lpo.fr/s-engager-a-nos-cotes/donner-a-la-lpo/faire-un-don/faites-un-don-a-la-lpo-france",
    1
 ),
 (
    'Terre de liens',
    'src/assets/ecologie/terreDeLiens.png',
    'https://soutenir.terredeliens.org/don/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyOCUSahW9uPHU3IG9aqb95ctjEjHUmuR2vocQQoVcvZUw%3D%3D&_cv=1',
    1
 ),
 (
    'Art Français',
    'src/assets/patrimoine/artFrançais.png',
    'https://www.sauvegardeartfrancais.fr/faire-un-don/',
    2
 ),
 (
    'Maisons Paysannes',
    'src/assets/patrimoine/maisonsPaysannes.png',
    'https://adhesion.maisons-paysannes.org/fr/je-soutiens',
    2
 ),
 (
    'Patrimoine Environnement',
    'src/assets/patrimoine/patrimoine.png',
    'https://www.helloasso.com/associations/patrimoine-environnement/formulaires/1',
    2
 ),
 (
    'Emmaus',
    'src/assets/pauvrete/emmaus.png',
    'https://www.emmaus-international.org/fr/don/',
    3
 ),
 (
    'Les restos du coeur',
    'src/assets/pauvrete/restos.png',
    'https://dons.restosducoeur.org/particulier/~mon-don?_cv=1',
    3
 ),
 (
    'Secours populaire',
    'src/assets/pauvrete/secoursPopulaire.png',
    'https://don.secourspopulaire.fr/vacances/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNuiNMnukQsVu3PY%2Fhvhz9FXZ2T9drfy6pDKEU4cZNKHFZnudEm6cwXpf0WoydupdgcAzQ%2BidAALJSJqRDxcF573L6CUQZSAWS8lQtSAVta%2F99%2B0hHmud9Pgfcd%2BHvIlJXbYV2fSH%2BAUVTeDdoNth1TcyuRY%2BpuCoCbXBxsoboEzmj0qb89GK3WecKJWYUB4M6SU3tLUxlGRbWFOXJ3rUHj&gad=1&gclid=CjwKCAjwtuOlBhBREiwA7agf1jtoCh1od-IrIacOkisPWOHWnhm0qjqZCIoTnuYsjOqEg8uLrXVEaxoC8L0QAvD_BwE&_cv=1',
    3
 ),
 (
    'Arc',
    'src/assets/sante/Arc-santé.png',
    'https://donner.fondation-arc.org/dons/~mon-don?_cv=1',
    4
 ),
 (
    'Médecins sans frontières',
    'src/assets/sante/médecins.png',
    'https://soutenir.msf.fr/faire-un-don/~mon-don?ns_ira_cr_arg=IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyPwETAZH%2BfJoZzZSLb0kPOpP5Y9vp3n4apjYFfuy8Grlj9hP3a72xFPt6G2Q3hoScwQKG%2B1BzqwWq8TXE24LU7dC7AFTc%2FWE6vWDKhiFHvwxh8Mt4ZA4ZCWtNQNWyfuSaKbg%2FQaxF7h4lw5%2BKcOxsVNrlwfjElQL3pvFcfqXfY%2B5IufZYera6AxZhbqhuYtCgNyzVn2fMlPgYt8W6CMBbybu10uY4rIW6IjN5%2FWj%2FgpuXjB4afGyKPJtFtK0fLRX%2F8pRRd9dTkYgUAU4EumWP6prOijQwBlI8mFry5WUsKLI2ig33CMA1LjdlJgkkqVNbMwONoxB8Nf0yd88fkkhhoLyzhfhI5nYPOjYrI%2FHDEFlLozWzmZhOPUEdrQAFoFSj8vFjvltlk3gLvDoPFZzhU2Nqn3VTYe%2BsWeM0MoIktFXw%3D%3D&esv_source=Google&esv_medium=SEA_Brand&esv_campaign=W%2A%2AW00001&esv_term=medecins+sans+frontiere&gad=1&gclid=CjwKCAjwtuOlBhBREiwA7agf1krxQIWWljqqnMSsGFGDbpED8hA6f14KNrTwXwmN6ApC3Wyfi8vNHRoCMBsQAvD_BwE&_cv=1',
    4
 ),
 (
    'Fondation pour la recherche médicale',
    'src/assets/sante/rechercheMedicale.png',
    'https://www.frm.org/nous-soutenir/faire-un-don?_gl=1*j66rfj*_up*MQ..*_ga*MTAyMDgwOTc0MS4xNjg5ODQ0Mjc1*_ga_VZRMK09MJ5*MTY4OTg0NDI3NS4xLjEuMTY4OTg0NDI3Ny4wLjAuMA..&gclid=CjwKCAjwtuOlBhBREiwA7agf1rFIwD3UjXXwtqjiIsRtpAM6539tCTgrbyIolAh4irYZtt_wVhL0QxoCYAcQAvD_BwE',
    4
 ),
 (
    'Sidaction',
    'src/assets/sante/sidaction.png',
    'https://don.sidaction.org/',
    4
 );

 DROP TABLE IF EXISTS admins;

 CREATE TABLE admins (
    id int primary key NOT NULL AUTO_INCREMENT,
    mail varchar(255) NOT NULL,
    password varchar(255) NOT NULL
 ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

 INSERT INTO admins (mail, password)
VALUES
 (
    'thibaut.resse@outlook.fr',
    'Bienessayé!'
 );