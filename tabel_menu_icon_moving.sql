-- phpMyAdmin SQL Dump
-- version 2.8.2
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Apr 30, 2013 at 06:22 PM
-- Server version: 5.0.51
-- PHP Version: 5.1.6
-- 
-- Database: `program_example`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `tabel_menu_icon_moving`
-- 

CREATE TABLE `tabel_menu_icon_moving` (
  `id` int(4) NOT NULL auto_increment,
  `nama` varchar(100) NOT NULL,
  `nama_file_icon` varchar(100) NOT NULL,
  `modul` varchar(50) NOT NULL,
  `x` double NOT NULL default '0',
  `y` double NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

-- 
-- Dumping data for table `tabel_menu_icon_moving`
-- 

INSERT INTO `tabel_menu_icon_moving` VALUES (1, 'Program Studi', 'prodi.png', 'programStuduModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (2, 'Jurusan', 'jurusan.png', 'jurusanModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (3, 'Personal Data', 'personaldata.png', 'personalDataModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (4, 'Matakuliah', 'matakuliah.png', 'matakuliahModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (5, 'Dosen & Karyawan', 'dosen.png', 'dosenModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (6, 'Mahasiswa', 'mahasiswa.png', 'mahasiswaModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (7, 'Dosen Matakuliah', 'dosenmatakuliah.png', 'dosenMatakuliahModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (8, 'Rencana Studi', 'krs.png', 'rencanaStudiModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (9, 'Peserta Matakuliah', 'pesertamk.png', 'pesertaMatakuliahModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (10, 'Nilai Matakuliah', 'nilaimk.png', '', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (12, 'Kartu Hasil Studi', 'nilaimk.png', 'kartuHasilStudiModul', 0, 0);
INSERT INTO `tabel_menu_icon_moving` VALUES (13, 'Transkrip Nilai', 'nilaimk.png', 'transkripNilaiModul', 0, 0);
