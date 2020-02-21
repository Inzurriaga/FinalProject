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
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `enable` TINYINT NOT NULL,
  `create_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB;


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
-- Table `user_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_info` ;

CREATE TABLE IF NOT EXISTS `user_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NULL,
  `description` TEXT NULL,
  `image_url` TEXT NULL,
  `user_id` INT NOT NULL,
  `state_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_info_user_idx` (`user_id` ASC),
  INDEX `fk_user_info_state1_idx` (`state_id` ASC),
  CONSTRAINT `fk_user_info_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
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
  `class` VARCHAR(45) NOT NULL,
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
    REFERENCES `user_info` (`id`)
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
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `message` ;

CREATE TABLE IF NOT EXISTS `message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_event`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_event` ;

CREATE TABLE IF NOT EXISTS `user_event` (
  `event_id` INT NOT NULL,
  `user_info_id` INT NOT NULL,
  PRIMARY KEY (`event_id`, `user_info_id`),
  INDEX `fk_event_has_user_info_user_info1_idx` (`user_info_id` ASC),
  INDEX `fk_event_has_user_info_event1_idx` (`event_id` ASC),
  CONSTRAINT `fk_event_has_user_info_event1`
    FOREIGN KEY (`event_id`)
    REFERENCES `event` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_event_has_user_info_user_info1`
    FOREIGN KEY (`user_info_id`)
    REFERENCES `user_info` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_mountain`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_mountain` ;

CREATE TABLE IF NOT EXISTS `user_mountain` (
  `mountain_id` INT NOT NULL,
  `user_info_id` INT NOT NULL,
  PRIMARY KEY (`mountain_id`, `user_info_id`),
  INDEX `fk_mountain_has_user_info_user_info1_idx` (`user_info_id` ASC),
  INDEX `fk_mountain_has_user_info_mountain1_idx` (`mountain_id` ASC),
  CONSTRAINT `fk_mountain_has_user_info_mountain1`
    FOREIGN KEY (`mountain_id`)
    REFERENCES `mountain` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_mountain_has_user_info_user_info1`
    FOREIGN KEY (`user_info_id`)
    REFERENCES `user_info` (`id`)
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
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `user` (`id`, `username`, `password`, `role`, `enable`, `create_date`) VALUES (1, 'Gabe', 'gabe', 'standard', 1, '2020-01-20 00:00:01.000000');

COMMIT;


-- -----------------------------------------------------
-- Data for table `state`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `state` (`id`, `abbr`, `name`) VALUES (1, 'CO', 'Colorado');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_info`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `user_info` (`id`, `email`, `description`, `image_url`, `user_id`, `state_id`) VALUES (1, 'gabe@localhost.com', 'badguy', 'gabe', 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mountain_class`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `mountain_class` (`id`, `class`, `description`) VALUES (1, '1', 'easy hiking');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mountain`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `mountain` (`id`, `name`, `longitude`, `latitude`, `height`, `state_id`, `mountain_class_id`) VALUES (1, 'pikes peak', -105.358887, 39.113014, 14115, 1, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `event`
-- -----------------------------------------------------
START TRANSACTION;
USE `mountaindb`;
INSERT INTO `event` (`id`, `description`, `event_date`, `completed`, `host_id`, `mountain_id`) VALUES (1, 'going on a climb', '2020-01-02 00:00:01.000000', 0, 1, 1);

COMMIT;

