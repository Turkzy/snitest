-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2024 at 09:15 AM
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
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `stocks`, `buyingPrice`, `sellingPrice`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(94, 'Zinc Faucet Handles', 3, 70, 140, 'ceb818fcc83d03c940ef11dda2d85016.jpg', 'http://localhost:5000/images/ceb818fcc83d03c940ef11dda2d85016.jpg', '2024-05-04 16:14:24', '2024-05-04 16:14:24'),
(95, 'Cast Iron Gate Valve Handwheel', 5, 90, 150, '8b7fe3913c75c79371a08363347d8763.jpg', 'http://localhost:5000/images/8b7fe3913c75c79371a08363347d8763.jpg', '2024-05-04 16:14:53', '2024-05-04 16:14:53'),
(96, 'Brass Urinal Spud', 2, 100, 170, '4f39f8c1546492272e852a9450294f69.jpg', 'http://localhost:5000/images/4f39f8c1546492272e852a9450294f69.jpg', '2024-05-04 16:15:13', '2024-05-04 16:15:13'),
(97, 'Brass Faucet Rubber Upper', 9, 60, 130, 'b99c4eefe48f934d3205e074d9d5805b.jpg', 'http://localhost:5000/images/b99c4eefe48f934d3205e074d9d5805b.jpg', '2024-05-04 16:16:03', '2024-05-04 16:16:03'),
(98, 'Brass Faucet Lower', 7, 70, 140, 'bf04b4a56c59427c88399715e3b44a4a.jpg', 'http://localhost:5000/images/bf04b4a56c59427c88399715e3b44a4a.jpg', '2024-05-04 16:16:19', '2024-05-04 16:16:19'),
(99, '105C-DIA CounterTop Basin', 6, 600, 1200, '34fb360f4ec99f93255ddfdd4f795bea.png', 'http://localhost:5000/images/34fb360f4ec99f93255ddfdd4f795bea.png', '2024-05-04 16:16:46', '2024-05-04 16:16:46'),
(100, '105C-B CounterTop Basin', 8, 700, 1400, 'eeec6fb638bf07746e3ed9d07b821377.png', 'http://localhost:5000/images/eeec6fb638bf07746e3ed9d07b821377.png', '2024-05-04 16:17:06', '2024-05-04 16:17:06'),
(101, '105C DIA-B COUNTERTOP BASIN', 4, 800, 1600, 'a48a859be57c0ba7f54dd6d757a9b96a.png', 'http://localhost:5000/images/a48a859be57c0ba7f54dd6d757a9b96a.png', '2024-05-04 16:17:30', '2024-05-04 16:17:30'),
(102, '105C CounterTop Basin', 5, 900, 1800, '8d7f4bac2d016a1cdc9a671a67836796.png', 'http://localhost:5000/images/8d7f4bac2d016a1cdc9a671a67836796.png', '2024-05-04 16:18:02', '2024-05-04 16:18:02'),
(103, '105A-DIA CounterTop Basin', 1, 500, 1000, '0255bee160d78246e450cf3033ed9950.png', 'http://localhost:5000/images/0255bee160d78246e450cf3033ed9950.png', '2024-05-04 16:20:42', '2024-05-04 16:20:42'),
(104, '105A-B CounterTop Basin', 5, 600, 1200, '47095344b886c6babaa579cc55c03e83.png', 'http://localhost:5000/images/47095344b886c6babaa579cc55c03e83.png', '2024-05-04 16:21:25', '2024-05-04 16:21:25'),
(105, '105A DIA-B CounterTop Basin', 7, 700, 1400, 'c1bf2e52d9dcbfed7f1d400b1df02937.png', 'http://localhost:5000/images/c1bf2e52d9dcbfed7f1d400b1df02937.png', '2024-05-04 16:21:42', '2024-05-04 16:21:42'),
(106, '105A CounterTop Basin', 4, 800, 1600, '7313a6672a838e95d413ebaec91fa3dd.png', 'http://localhost:5000/images/7313a6672a838e95d413ebaec91fa3dd.png', '2024-05-04 16:22:02', '2024-05-04 16:22:02');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
