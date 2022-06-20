CREATE DATABASE final;

USE final;

SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `education`;
CREATE TABLE `education` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `education` varchar(255) NOT NULL,
  `edu_money` int(10) unsigned NOT NULL COMMENT '学历底薪',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


INSERT INTO `education` VALUES ('1', '初中', '2000');
INSERT INTO `education` VALUES ('2', '高中', '3500');
INSERT INTO `education` VALUES ('3', '本科', '4000');
INSERT INTO `education` VALUES ('4', '硕士', '4500');
INSERT INTO `education` VALUES ('5', '博士', '5000');


DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `per_id` int(10) unsigned NOT NULL,
  `loginame` varchar(255) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  `port_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;


INSERT INTO `login` VALUES ('1', '1', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '1');
INSERT INTO `login` VALUES ('2', '2', 'Gandalf', '49de77cada6633b87b46a9eee9853356', '2');
INSERT INTO `login` VALUES ('3', '3', 'wjf', '9edd7d6693883538a0dda64cc144f516', '3');
INSERT INTO `login` VALUES ('4', '4', 'test1', '5a105e8b9d40e1329780d62ea2265d8a', '1');
INSERT INTO `login` VALUES ('5', '5', 'test2', 'ad0234829205b9033196ba818f7a872b', '1');
INSERT INTO `login` VALUES ('6', '6', 'test3', '8ad8757baa8564dc136c1e07507f4a98', '1');
INSERT INTO `login` VALUES ('8', '8', 'test4', '86985e105f79b95d6bc918fb45ec7727', '1');


DROP TABLE IF EXISTS `pay`;
CREATE TABLE `pay` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `per_id` int(10) unsigned NOT NULL,
  `month` int(10) unsigned NOT NULL,
  `year` int(10) unsigned NOT NULL,
  `kbi` int(10) unsigned NOT NULL COMMENT '绩效考核奖金',
  `perfor` int(11) NOT NULL COMMENT '提成',
  `edu_id` int(10) unsigned NOT NULL,
  `sta_id` int(10) unsigned NOT NULL,
  `status` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;


INSERT INTO `pay` VALUES ('1', '1', '4', '2021', '2000', '2500', '2', '1', '1');
INSERT INTO `pay` VALUES ('2', '2', '4', '2021', '3500', '0', '3', '2', '1');
INSERT INTO `pay` VALUES ('3', '3', '4', '2021', '3500', '0', '3', '3', '1');
INSERT INTO `pay` VALUES ('4', '4', '4', '2021', '2000', '1000', '4', '1', '0');
INSERT INTO `pay` VALUES ('5', '5', '4', '2021', '3000', '1000', '4', '1', '0');
INSERT INTO `pay` VALUES ('6', '6', '4', '2021', '4500', '1000', '5', '1', '0');
INSERT INTO `pay` VALUES ('8', '8', '4', '2021', '0', '0', '5', '1', '0');


DROP TABLE IF EXISTS `permsg`;
CREATE TABLE `permsg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `gender` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '0为女，1为男',
  `age` int(10) unsigned NOT NULL,
  `birthday` varchar(14) NOT NULL,
  `isMarry` int(11) NOT NULL DEFAULT '0' COMMENT '0为否，1为已婚',
  `address` varchar(255) NOT NULL,
  `personNum` bigint(18) unsigned NOT NULL,
  `entryTime` varchar(14) NOT NULL,
  `edu_id` int(10) unsigned NOT NULL,
  `status` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '1为在职，0为离职',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;


INSERT INTO `permsg` VALUES ('1', '亚菲利欧', '1', '21', '2001-12-16', '0', '符文大陆', '1', '2018-9-16', '2', '1');
INSERT INTO `permsg` VALUES ('2', '勒布朗', '0', '27', '1995-6-13', '0', '黑色玫瑰', '2', '2015-8-13', '3', '1');
INSERT INTO `permsg` VALUES ('3', '瑟雷西', '1', '20', '2002-5-20', '1', '暗影岛', '3', '2017-5-6', '3', '1');
INSERT INTO `permsg` VALUES ('4', '贪啃奇', '1', '21', '2001-7-18', '0', '符文大陆', '4', '2016-7-8', '4', '1');
INSERT INTO `permsg` VALUES ('5', '法洛士', '1', '21', '2001-3-19', '0', '符文大陆', '5', '2022-6-4', '4', '1');
INSERT INTO `permsg` VALUES ('6', '卡莎碧雅', '0', '30', '1992-9-7', '0', '诺克萨斯', '6', '2021-3-16', '5', '1');
INSERT INTO `permsg` VALUES ('7', '犽宿', '1', '20', '2002-9-14', '1', '艾欧尼亚', '7', '2012-7-4', '4', '0');
INSERT INTO `permsg` VALUES ('8', '犽凝', '1', '21', '2001-7-31', '0', '艾欧尼亚', '8', '2021-12-12', '5', '1');
INSERT INTO `permsg` VALUES ('9', '镜爪', '0', '19', '2003-4-1', '0', '符文大陆', '9', '2016-9-3', '3', '0');


DROP TABLE IF EXISTS `station`;
CREATE TABLE `station` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sta_name` varchar(255) NOT NULL,
  `sta_money` int(10) unsigned NOT NULL COMMENT '岗位津贴',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


INSERT INTO `station` VALUES ('1', '普通员工', '2000');
INSERT INTO `station` VALUES ('2', '行政主管', '3000');
INSERT INTO `station` VALUES ('3', '财务总监', '3500');
