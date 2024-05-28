-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 07:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `stocks` int(11) NOT NULL,
  `buyingPrice` float NOT NULL,
  `sellingPrice` float NOT NULL,
  `category` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `stocks`, `buyingPrice`, `sellingPrice`, `category`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(133, 'ISG1 INFRARED SAUNA', 3, 3000, 3500, 'Infrared Saunas', 'ffbeefdc0ccde3aa4bf671ea04d756bb.png', 'http://localhost:5000/images/ffbeefdc0ccde3aa4bf671ea04d756bb.png', '2024-05-27 16:12:09', '2024-05-27 16:12:09'),
(134, 'ISG2 INFRARED SAUNA', 5, 3000, 3500, 'Infrared Saunas', 'e2af7f75d5269023db14f11e9f768e6a.png', 'http://localhost:5000/images/e2af7f75d5269023db14f11e9f768e6a.png', '2024-05-27 16:13:18', '2024-05-27 16:14:23'),
(135, 'ISG3 INFRARED SAUNA', 5, 3500, 3700, 'Infrared Saunas', '5cfd5cb12bf4232e60d497c4ccfbc5d7.png', 'http://localhost:5000/images/5cfd5cb12bf4232e60d497c4ccfbc5d7.png', '2024-05-27 16:17:31', '2024-05-28 15:07:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
