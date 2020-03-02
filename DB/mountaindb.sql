-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mountaindb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mountaindb` ;

-- -----------------------------------------------------
-- Schema mountaindb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mountaindb` DEFAULT CHARACTER SET utf8 ;
USE `mountaindb` ;

-- -----------------------------------------------------
-- Table `state`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `state` ;

CREATE TABLE IF NOT EXISTS `state` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `abbr` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `description` TEXT NULL,
  `image_url` TEXT NULL,
  `state_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `enabled` TINYINT NOT NULL,
  `create_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_info_state1_idx` (`state_id` ASC),
  CONSTRAINT `fk_user_info_state1`
    FOREIGN KEY (`state_id`)
    REFERENCES `state` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mountain_class`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mountain_class` ;

CREATE TABLE IF NOT EXISTS `mountain_class` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `class_type` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mountain`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mountain` ;

CREATE TABLE IF NOT EXISTS `mountain` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `longitude` DOUBLE NOT NULL,
  `latitude` DOUBLE NOT NULL,
  `height` INT NOT NULL,
  `state_id` INT NOT NULL,
  `mountain_class_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mountain_state1_idx` (`state_id` ASC),
  INDEX `fk_mountain_mountain_class1_idx` (`mountain_class_id` ASC),
  CONSTRAINT `fk_mountain_state1`
    FOREIGN KEY (`state_id`)
    REFERENCES `state` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mountain_mountain_class1`
    FOREIGN KEY (`mountain_class_id`)
    REFERENCES `mountain_class` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `event` ;

CREATE TABLE IF NOT EXISTS `event` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` TEXT NOT NULL,
  `event_date` DATETIME NOT NULL,
  `completed` TINYINT NOT NULL,
  `host_id` INT NOT NULL,
  `mountain_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_event_user_info1_idx` (`host_id` ASC),
  INDEX `fk_event_mountain1_idx` (`mountain_id` ASC),
  CONSTRAINT `fk_event_user_info1`
    FOREIGN KEY (`host_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_mountain1`
    FOREIGN KEY (`mountain_id`)
    REFERENCES `mountain` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `chat_room`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chat_room` ;

CREATE TABLE IF NOT EXISTS `chat_room` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `event_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chat_room_event1_idx` (`event_id` ASC),
  CONSTRAINT `fk_chat_room_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `message` ;

CREATE TABLE IF NOT EXISTS `message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `chat_room_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `message` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_chat_room1_idx` (`chat_room_id` ASC),
  INDEX `fk_message_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_message_chat_room1`
    FOREIGN KEY (`chat_room_id`)
    REFERENCES `chat_room` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_message_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_event` ;

CREATE TABLE IF NOT EXISTS `user_event` (
  `event_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`event_id`, `user_id`),
  INDEX `fk_event_has_user_info_user_info1_idx` (`user_id` ASC),
  INDEX `fk_event_has_user_info_event1_idx` (`event_id` ASC),
  CONSTRAINT `fk_event_has_user_info_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_has_user_info_user_info1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_mountain`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_mountain` ;

CREATE TABLE IF NOT EXISTS `user_mountain` (
  `mountain_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`mountain_id`, `user_id`),
  INDEX `fk_mountain_has_user_info_user_info1_idx` (`user_id` ASC),
  INDEX `fk_mountain_has_user_info_mountain1_idx` (`mountain_id` ASC),
  CONSTRAINT `fk_mountain_has_user_info_mountain1`
    FOREIGN KEY (`mountain_id`)
    REFERENCES `mountain` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mountain_has_user_info_user_info1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS fluff@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'fluff'@'localhost' IDENTIFIED BY 'fluff';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'fluff'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `state`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (1, 'AL', 'Alabama');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (2, 'AK', 'Alaska');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (3, 'AZ', 'Arizona');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (4, 'AR', 'Arkansas');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (5, 'CA', 'California');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (6, 'CO', 'Colorado');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (7, 'CT', 'Conneticut');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (8, 'DE', 'Delaware');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (9, 'FL', 'Florida');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (10, 'GA', 'Georgia');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (11, 'HI', 'Hawaii');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (12, 'ID', 'Idaho');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (13, 'IL', 'Illinois');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (14, 'IN', 'Indiana');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (15, 'IA', 'Iowa');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (16, 'KS', 'Kansas');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (17, 'KY', 'Kentucky');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (18, 'LA', 'Louisiana');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (19, 'ME', 'Maine');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (20, 'MD', 'Maryland');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (21, 'MA', 'Massachusetts');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (22, 'MI', 'Michigan');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (23, 'MN', 'Minnesota');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (24, 'MS', 'Mississippi');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (25, 'MO', 'Missouri');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (26, 'MT', 'Montana');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (27, 'NE', 'Nebraska');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (28, 'NV', 'Nevada');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (29, 'NH', 'New Hampshire');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (30, 'NJ', 'New Jersey');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (31, 'NM', 'New Mexico');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (32, 'NY', 'New York');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (33, 'NC', 'North Carolina');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (34, 'ND', 'North Dakota');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (35, 'OH', 'Ohio');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (36, 'OK', 'Oklahoma');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (37, 'OR', 'Oregon');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (38, 'PA', 'Pennsylvania');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (39, 'RI', 'Rhode Island');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (40, 'SC', 'South Carolina');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (41, 'SD', 'South Dakota');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (42, 'TN', 'Tennessee');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (43, 'TX', 'Texas');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (44, 'UT', 'Utah');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (45, 'VT', 'Vermont');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (46, 'VA', 'Virginia');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (47, 'WA', 'Washington');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (48, 'WV', 'West Virginia');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (49, 'WI', 'Wisconsin');
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (50, 'WY', 'Wyoming');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `user` (`id`, `email`, `description`, `image_url`, `state_id`, `username`, `password`, `role`, `enabled`, `create_date`) VALUES (1, 'gabe@localhost.com', 'badguy', 'gabe', 1, 'hello', 'hello', 'standard', 1, '2000-01-02 10:00:00.000000');
INSERT INTO `user` (`id`, `email`, `description`, `image_url`, `state_id`, `username`, `password`, `role`, `enabled`, `create_date`) VALUES (2, 'sonic@sonic.com', 'im a fast boy', 'https://vignette.wikia.nocookie.net/sonic/images/2/2d/TSR_Sonic.png/revision/latest/top-crop/width/360/height/360?cb=20191020043348', 1, 'sonic', '$2a$10$3RlwbJNyQtN3ysz3IKmBOOzOGEYHFBuqf5t.nPm3.K54jXMPpPmP6', 'standard', 1, '2000-01-02 10:00:00.000000');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mountain_class`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `mountain_class` (`id`, `class_type`, `description`) VALUES (1, 'A', 'Up to 8 miles round trip or 1200’ elevation gain (or both).  Prior hiking experience is usually not necessary.');
INSERT INTO `mountain_class` (`id`, `class_type`, `description`) VALUES (2, 'B', 'Up to 12 miles round trip or 2500’ elevation gain (or both).  Moderate to strenuous physical activity.  Some prior experience is beneficial.');
INSERT INTO `mountain_class` (`id`, `class_type`, `description`) VALUES (3, 'C', 'Up to 15 miles round trip or 3500’ elevation gain (or both).  Very strenuous physical activity.   Prior experience and training is beneficial.');
INSERT INTO `mountain_class` (`id`, `class_type`, `description`) VALUES (4, 'D', 'Over 15 miles round trip or 3500’ elevation gain (or both).  Very strenuous physical activity often including exposure or requiring the use of technical skills and equipment.  Knowledge based on prior experience and training is highly beneficial.');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mountain`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `mountain` (`id`, `name`, `longitude`, `latitude`, `height`, `state_id`, `mountain_class_id`) VALUES (1, 'pikes peak', -105.9472356, 39.113014, 14115, 1, 1);
INSERT INTO `mountain` (`id`, `name`, `longitude`, `latitude`, `height`, `state_id`, `mountain_class_id`) VALUES (2, 'Byers peak', -105.9472368, 39.8644308, 12804, 1, 1);
INSERT INTO `mountain` (`id`, `name`, `longitude`, `latitude`, `height`, `state_id`, `mountain_class_id`) VALUES (3, 'Stanley Mountain', -105.8227868, 39.7858202, 13300, 1, 1);
INSERT INTO `mountain` (`id`, `name`, `longitude`, `latitude`, `height`, `state_id`, `mountain_class_id`) VALUES (4, 'Parry Peaks', -105.8380427, 39.8380427, 13391, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `event`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (1, 'going on a climb', '2020-01-02 00:00:01.000000', 0, 1, 1);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (2, 'Intermediate hike, 7.7 miles', '2020-04-05 10:08:00.000000', 0, 1, 1);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (3, 'Winter hiking event', '2020-03-04 08:00:00.000000', 0, 1, 3);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (4, 'Hiking with dogs', '2020-03-01 09:00:00.000000', 0, 1, 2);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (5, 'hiking with friends', '2020-04-05 10:08:00.000000', 0, 1, 3);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (6, 'hiking with beer', '2020-04-05 10:08:00.000000', 0, 1, 2);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (7, 'hiking and yoga', '2020-04-05 10:08:00.000000', 0, 1, 4);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (8, 'hiking with Gabe', '2020-04-05 10:08:00.000000', 0, 1, 1);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (9, 'hiking with kai', '2020-04-05 10:08:00.000000', 0, 1, 2);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (10, 'hike the continental divide', '2020-04-05 10:08:00.000000', 0, 1, 1);
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (11, 'nature hike', '2020-04-05 10:08:00.000000', 0, 1, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `chat_room`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `chat_room` (`id`, `event_id`) VALUES (1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `message`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (1, 1, 2, 'hey dude wheres the mountain @??');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (2, 1, 1, 'I thought you knew where it was...?');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (3, 1, 2, 'far out!');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (4, 1, 1, 'amethyst fluff');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (5, 1, 2, 'lots of things to be said');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (6, 1, 1, 'wherever you go, there you are');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (7, 1, 2, 'cannibus scuba team is here');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (8, 1, 1, 'isnt it too cold to scuba dive?');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (9, 1, 2, 'not for gabe,  hes wearing shorts to the ice dive');
INSERT INTO `message` (`id`, `chat_room_id`, `user_id`, `message`) VALUES (10, 1, 1, 'lalalala');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_event`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `user_event` (`event_id`, `user_id`) VALUES (1, 2);
INSERT INTO `user_event` (`event_id`, `user_id`) VALUES (2, 2);
INSERT INTO `user_event` (`event_id`, `user_id`) VALUES (3, 2);

COMMIT;

