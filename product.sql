-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 07:27 AM
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
  `stocks` int(11) DEFAULT NULL,
  `buyingPrice` float DEFAULT NULL,
  `sellingPrice` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `stocks`, `buyingPrice`, `sellingPrice`, `image`, `url`, `category`, `createdAt`, `updatedAt`) VALUES
(221, 'Lotus-angle-grinder', 11, 1910, 2075, '237bececbdc0099bf51762f377909aa1.jpg', 'http://localhost:5000/images/237bececbdc0099bf51762f377909aa1.jpg', 'Angle Grinders', '0000-00-00 00:00:00', '2024-06-05 06:31:10'),
(222, 'Makita-GA7020 Angle grinder', 8, 7839, 7950, '791bdbeb28ec61526f16be3c9326abc8.jpg', 'http://localhost:5000/images/791bdbeb28ec61526f16be3c9326abc8.jpg', 'Angle Grinders', '0000-00-00 00:00:00', '2024-06-03 13:17:22'),
(223, 'A0087-Diamond-cutting-wheel', 20, 244, 300, '6b9568458e7eb0778efab45f549b0bae.jpg', 'http://localhost:5000/images/6b9568458e7eb0778efab45f549b0bae.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:17:30'),
(224, 'Bosun-diamond-cutting-wheel', 18, 234, 275, '881439a9c6d10a2239db0055763da105.jpg', 'http://localhost:5000/images/881439a9c6d10a2239db0055763da105.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:18:40'),
(225, 'Craftright-tile-saw-cutter', 9, 909, 1080, '75de15837fa39264f91784dcce5a92ef.jpg', 'http://localhost:5000/images/75de15837fa39264f91784dcce5a92ef.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:18:05'),
(226, 'Irwin-continuous-diamond-cutting', 11, 375, 450, '5313d318c38eaa25e7e320e8e4115659.jpg', 'http://localhost:5000/images/5313d318c38eaa25e7e320e8e4115659.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:20:04'),
(227, 'Irwin-segmented-diamond-cutting', 13, 341, 410, 'c393398b94d78ee289b1313af6fe425a.jpg', 'http://localhost:5000/images/c393398b94d78ee289b1313af6fe425a.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:20:15'),
(228, 'Irwin-turbo-diamond-cutting-blade', 10, 425, 500, 'a7844fb424d4d6c14cf18234383ec088.jpg', 'http://localhost:5000/images/a7844fb424d4d6c14cf18234383ec088.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:22:11'),
(229, 'KYK-diamond-wheel', 14, 270, 340, '1c2150721814c13339eb88870fca406f.jpg', 'http://localhost:5000/images/1c2150721814c13339eb88870fca406f.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:23:59'),
(230, 'KYK-Diamond-Wheel-Thin', 9, 312, 376, 'ec04dfab6f35c083e77d43612d170c57.jpg', 'http://localhost:5000/images/ec04dfab6f35c083e77d43612d170c57.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:24:09'),
(231, 'Powerhouse-Diamond-Cutting-Wheel', 6, 520, 590, 'b928fe22e4a6163259f23648a3356e9a.jpg', 'http://localhost:5000/images/b928fe22e4a6163259f23648a3356e9a.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 13:24:44'),
(232, 'Redifix tile adhesive', 7, 967, 1100, 'bf21978fc195065ee769ce2f783d8f6f.jpg', 'http://localhost:5000/images/bf21978fc195065ee769ce2f783d8f6f.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 13:25:23'),
(233, 'ABCTile adhesive', 15, 300, 350, '87233d88e55c0fa355a71729dad3b85e.jpg', 'http://localhost:5000/images/87233d88e55c0fa355a71729dad3b85e.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 13:26:08'),
(234, 'Zemcoat-skimcoat', 19, 495, 540, '78f6ac12b4a6f3f185205b112e4741d8.jpg', 'http://localhost:5000/images/78f6ac12b4a6f3f185205b112e4741d8.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 13:26:19'),
(235, 'Tile-Max-Grout', 23, 75, 100, '12dd39d94bfb40a69653173de8e04f9d.png', 'http://localhost:5000/images/12dd39d94bfb40a69653173de8e04f9d.png', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 13:26:29'),
(236, 'Tile-cutter-8-KTC211-KYK', 11, 216, 260, 'cc5f39198db922fee0ef6dee455c4577.jpg', 'http://localhost:5000/images/cc5f39198db922fee0ef6dee455c4577.jpg', 'Tile Cutters', '0000-00-00 00:00:00', '2024-06-03 13:26:42'),
(237, 'Amerilock footbolt', 16, 258, 450, 'dbacbf32ef5d20cdeb986ed637bf14ae.jpg', 'http://localhost:5000/images/dbacbf32ef5d20cdeb986ed637bf14ae.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:27:16'),
(238, 'Amerilock-Door-Chain bolt', 19, 286, 310, '3041f9b69f7936cbcea6cb8b1451474e.png', 'http://localhost:5000/images/3041f9b69f7936cbcea6cb8b1451474e.png', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:27:30'),
(239, 'Amerilock-door-knob-AL588', 21, 270, 300, '11e70f102082ffab1de9369e7406e7a9.jpg', 'http://localhost:5000/images/11e70f102082ffab1de9369e7406e7a9.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:28:30'),
(240, 'Butterfly-Lock-Install-Kit', 13, 345, 400, '24d5f3c95331bc81133f33c45d213137.jpg', 'http://localhost:5000/images/24d5f3c95331bc81133f33c45d213137.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:28:50'),
(241, 'Camel-drawer-lock', 22, 78, 90, '9d183d7c376a8701bacbd62626728bc6.jpg', 'http://localhost:5000/images/9d183d7c376a8701bacbd62626728bc6.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:29:04'),
(242, 'KYK-barrel-bolt 2', 25, 14, 23, '7b0374720c180ff97e1dbce7cbb3f1bc.jpg', 'http://localhost:5000/images/7b0374720c180ff97e1dbce7cbb3f1bc.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 13:29:14'),
(243, 'Cabinet-handle round', 20, 59, 65, 'aeb95c5c3684eb4b155ec596620bc147.jpg', 'http://localhost:5000/images/aeb95c5c3684eb4b155ec596620bc147.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:29:32'),
(244, 'Cabinet-handle-6-flat', 18, 85, 100, 'adfd31098b140f6b53b521921df9bb09.jpg', 'http://localhost:5000/images/adfd31098b140f6b53b521921df9bb09.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:30:29'),
(245, 'China-door-hinges', 19, 32, 40, '7c6c55eb6d3a6f318e8bc4884d519183.jpg', 'http://localhost:5000/images/7c6c55eb6d3a6f318e8bc4884d519183.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:30:48'),
(246, 'Concealed-Hinges-C1-1-3', 21, 50, 65, '6edf7a316959cfe43573beb8a0ec4daf.png', 'http://localhost:5000/images/6edf7a316959cfe43573beb8a0ec4daf.png', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:30:58'),
(247, 'Cylinder-hinges', 14, 55, 69, '0381e63a955db595755815a860b9dbe9.jpg', 'http://localhost:5000/images/0381e63a955db595755815a860b9dbe9.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:31:09'),
(248, 'Door-roller-plastic-brown', 12, 124, 145, '26143b96eb48d70e395de59db8f9ba0e.jpg', 'http://localhost:5000/images/26143b96eb48d70e395de59db8f9ba0e.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:31:20'),
(249, 'Stanley-door-hinge', 17, 117, 130, '7a3e1274a14a173a1955d6ba608e7cac.jpg', 'http://localhost:5000/images/7a3e1274a14a173a1955d6ba608e7cac.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:32:17'),
(250, 'Top-Most-Great-Deals-Cabinet-Handle', 15, 215, 230, 'e1626cdd47f9ef864394fe9e798e7aef.jpg', 'http://localhost:5000/images/e1626cdd47f9ef864394fe9e798e7aef.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 13:32:31'),
(251, 'Drawer-guide', 10, 590, 630, '98595403fc6cfb6f799c7bb8485311ea.jpg', 'http://localhost:5000/images/98595403fc6cfb6f799c7bb8485311ea.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 13:32:42'),
(252, 'Drawer-guide-black', 8, 786, 800, 'f0275e4fe1cdf59292d87f6b4602f404.jpg', 'http://localhost:5000/images/f0275e4fe1cdf59292d87f6b4602f404.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 13:33:31'),
(253, 'Top-most best deal drawer-guide', 9, 215, 230, 'f0275e4fe1cdf59292d87f6b4602f404.jpg', 'http://localhost:5000/images/f0275e4fe1cdf59292d87f6b4602f404.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 12:42:12'),
(254, 'Door-hole-saw', 11, 587, 600, '6226c1cf521e49e68db843d7c9a65738.jpg', 'http://localhost:5000/images/6226c1cf521e49e68db843d7c9a65738.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 13:34:03'),
(255, 'KYK-holesaw-set', 8, 191, 210, 'd3d2ee747cb55a5371deb3624f9d33a7.jpg', 'http://localhost:5000/images/d3d2ee747cb55a5371deb3624f9d33a7.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 13:34:21'),
(256, 'Lotus-hole-saw', 6, 293, 220, 'b20c466edb3137225f2ab0c114cbee7f.jpg', 'http://localhost:5000/images/b20c466edb3137225f2ab0c114cbee7f.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 13:34:31'),
(257, 'Stanley-crosscut-saw', 10, 382, 400, 'ad9981949c194579144646076bca0bce.jpg', 'http://localhost:5000/images/ad9981949c194579144646076bca0bce.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 13:34:43'),
(258, 'Wood-chisel', 9, 340, 375, '53d17790cab60a8edf02ad441795656e.jpg', 'http://localhost:5000/images/53d17790cab60a8edf02ad441795656e.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 13:43:22'),
(259, 'Door-jamb mirante', 5, 2175, 2320, '543412edacf316d46a6809dbba750a3f.jpg', 'http://localhost:5000/images/543412edacf316d46a6809dbba750a3f.jpg', 'Jambs', '0000-00-00 00:00:00', '2024-06-03 14:20:59'),
(260, 'Door-jamb tanguile', 4, 2700, 2790, '543412edacf316d46a6809dbba750a3f.jpg', 'http://localhost:5000/images/543412edacf316d46a6809dbba750a3f.jpg', 'Jambs', '0000-00-00 00:00:00', '2024-06-03 14:21:19'),
(261, 'PVC-Brown-with-Louver', 7, 2320, 2380, 'aaad05a5f246694cd23e8883e2c641fa.jpg', 'http://localhost:5000/images/aaad05a5f246694cd23e8883e2c641fa.jpg', 'Doors', '0000-00-00 00:00:00', '2024-06-03 14:21:57'),
(262, 'PVC-White-With-Louver', 5, 2700, 2790, 'c6e42204514f9a7abe9162b3d97ec727.jpg', 'http://localhost:5000/images/c6e42204514f9a7abe9162b3d97ec727.jpg', 'Doors', '0000-00-00 00:00:00', '2024-06-03 14:22:22'),
(263, 'Apricot white 869 Destiny elastomeric paint', 9, 2658, 2600, 'ac06466521b3ae0bb04ee9572462fbbf.png', 'http://localhost:5000/images/ac06466521b3ae0bb04ee9572462fbbf.png', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:24:03'),
(264, 'Bosny-spray-paint-black', 20, 130, 135, '2e3503146ea30bdb590e1aceb589f6ac.jpg', 'http://localhost:5000/images/2e3503146ea30bdb590e1aceb589f6ac.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:24:23'),
(265, 'Boysen Automotive lacquer black #1390 4 liters', 13, 957, 998, 'cf4b6ea1f9c068abe1708547e5cda23d.jpg', 'http://localhost:5000/images/cf4b6ea1f9c068abe1708547e5cda23d.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:24:44'),
(266, 'Boysen-permacoat flat latex white', 11, 2610, 2675, 'd354af2c8c2b410a1f86f40fa6c3d4a7.jpg', 'http://localhost:5000/images/d354af2c8c2b410a1f86f40fa6c3d4a7.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:25:07'),
(267, 'Coat-saver epoxy primer gray 4 liters', 10, 955, 995, '07063c38173e1282e3608b2ffe60801e.jpg', 'http://localhost:5000/images/07063c38173e1282e3608b2ffe60801e.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:25:35'),
(268, 'Davies-Acrycolor black 1 liter', 15, 102, 118, '4302a279385208ca2307ff23c2ee2a34.jpg', 'http://localhost:5000/images/4302a279385208ca2307ff23c2ee2a34.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:26:38'),
(269, 'Davies-biofresh + satin white 4 liters', 8, 827, 843, '44bea19d21c50fe356454414b228e200.jpg', 'http://localhost:5000/images/44bea19d21c50fe356454414b228e200.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:30:07'),
(270, 'Davies DV-2040 oil wood stain maple', 12, 545, 585, 'b9c84e13fd5760662b5cb5938cb9344a.jpg', 'http://localhost:5000/images/b9c84e13fd5760662b5cb5938cb9344a.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:30:40'),
(271, 'Davies-megacryl DV-515 Semi gloss white', 9, 3025, 3075, 'dc40eab72f637025e97696127a3cb6ed.jpg', 'http://localhost:5000/images/dc40eab72f637025e97696127a3cb6ed.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:32:11'),
(272, 'Davies-Flat-Wall-Enamel-White', 13, 735, 768, '0fbe26ccbf0df2851dfe8cd1fd4a5ed9.jpg', 'http://localhost:5000/images/0fbe26ccbf0df2851dfe8cd1fd4a5ed9.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:32:37'),
(273, 'DAVIES-WHISPER-BEIGE', 20, 218, 236, '6448805639650972d6647422282004f2.jpg', 'http://localhost:5000/images/6448805639650972d6647422282004f2.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:33:05'),
(274, 'DAVIES-WHISPER-PINK', 22, 207, 215, 'b61f6779fa3c0b64efb135c351978da0.jpg', 'http://localhost:5000/images/b61f6779fa3c0b64efb135c351978da0.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:34:02'),
(275, 'Davies-hi-solid clear gloss lacquer', 10, 789, 799, '66b6d55a77280f05da5f2c950b5b5135.jpg', 'http://localhost:5000/images/66b6d55a77280f05da5f2c950b5b5135.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:34:29'),
(276, 'Davies-megacryl-500-white', 9, 2638, 2645, 'a0e25c882ef0252b167eb6b8d17415fb.jpg', 'http://localhost:5000/images/a0e25c882ef0252b167eb6b8d17415fb.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:35:07'),
(277, 'Davies-concrete-primer and sealer white', 10, 2600, 2635, '4de45841ded3d5ac71b2f5b506b2ee41.jpg', 'http://localhost:5000/images/4de45841ded3d5ac71b2f5b506b2ee41.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:36:02'),
(278, 'Megacryl-glorious-yellow', 9, 812, 823, '8e63443c2b631f224c8fead10390b5ef.jpg', 'http://localhost:5000/images/8e63443c2b631f224c8fead10390b5ef.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:53:15'),
(279, 'Davies-525-megacryl-gloss-white', 12, 3025, 3023, 'c7f10dc8b048b30c27bbcec9d61eaa06.jpg', 'http://localhost:5000/images/c7f10dc8b048b30c27bbcec9d61eaa06.jpg', 'Paints', '0000-00-00 00:00:00', '2024-06-03 14:53:36'),
(280, 'Longspan RIB22', 5, 6179, 6198, '4758fe4710c4da0d81c5a5cb32451fa8.png', 'http://localhost:5000/images/4758fe4710c4da0d81c5a5cb32451fa8.png', 'Roofing Materials', '0000-00-00 00:00:00', '2024-06-03 14:55:54'),
(281, 'Long-TWIN-RIB', 6, 6166, 6300, 'f66e0b871aa34cdb101b7abfe3384913.jpg', 'http://localhost:5000/images/f66e0b871aa34cdb101b7abfe3384913.jpg', 'Roofing Materials', '0000-00-00 00:00:00', '2024-06-03 14:56:38'),
(282, 'Apo Galfan Corrugated sheet', 7, 873, 887, 'fa14d212892c35e3f3e9982e92a822a0.jpg', 'http://localhost:5000/images/fa14d212892c35e3f3e9982e92a822a0.jpg', 'Roofing Materials', '0000-00-00 00:00:00', '2024-06-03 14:56:57'),
(283, 'G.I Plain Sheet', 8, 2267, 2300, '2335feef0fea83fdd0673ecfefbd68ab.jpg', 'http://localhost:5000/images/2335feef0fea83fdd0673ecfefbd68ab.jpg', 'Roofing Materials', '0000-00-00 00:00:00', '2024-06-03 14:57:18'),
(284, 'Insulation', 6, 2996, 3013, 'c9d2445fb8ed7619b997e05901b97302.jpg', 'http://localhost:5000/images/c9d2445fb8ed7619b997e05901b97302.jpg', 'Roofing Materials', '0000-00-00 00:00:00', '2024-06-03 14:57:55'),
(285, 'Aluminum duct-tape 2x 150ft', 15, 243, 249, 'bd0fb15e543cab32fcb6269c87bc89be.jpg', 'http://localhost:5000/images/bd0fb15e543cab32fcb6269c87bc89be.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 14:59:13'),
(286, 'Blind-rivet', 10, 350, 400, '46a5df2eebe7658be63a1fd5f9643ba0.jpg', 'http://localhost:5000/images/46a5df2eebe7658be63a1fd5f9643ba0.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 14:58:58'),
(287, 'Sealant-gun', 20, 135, 145, 'e832243a02cc95972743817ab638a36d.jpg', 'http://localhost:5000/images/e832243a02cc95972743817ab638a36d.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:00:08'),
(288, 'Butterfly tin snips', 19, 405, 415, 'e9b43c3caa109819edd94f918cc0a13b.jpg', 'http://localhost:5000/images/e9b43c3caa109819edd94f918cc0a13b.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:00:26'),
(289, 'Pioneer Pro ElastoSeal', 18, 181, 190, '76230d890bb6df1bd1762b15c1653a66.jpg', 'http://localhost:5000/images/76230d890bb6df1bd1762b15c1653a66.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:00:46'),
(290, 'Stanley riveter chrome', 7, 570, 585, 'ec58c6ed2bb4f7ac929fdd5a7a13665d.jpg', 'http://localhost:5000/images/ec58c6ed2bb4f7ac929fdd5a7a13665d.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:01:28'),
(291, 'Tek-screw adaptor', 20, 40, 55, '750bb5d62bd759463586b2c25ddeec57.jpg', 'http://localhost:5000/images/750bb5d62bd759463586b2c25ddeec57.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:02:18'),
(292, 'Tekscrew-Adaptor', 22, 37, 53, '976f8b179fd5008181fb910ecfb83689.jpg', 'http://localhost:5000/images/976f8b179fd5008181fb910ecfb83689.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:02:44'),
(293, 'Tinsnip ordinary', 17, 340, 355, 'd6c010ed5bb665f4cd51afed43eb63ff.jpg', 'http://localhost:5000/images/d6c010ed5bb665f4cd51afed43eb63ff.jpg', 'Tools and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:03:24'),
(294, 'Angle bar', 6, 7274, 7280, '3269aad9196a17c3d17a9562f49cc835.jpg', 'http://localhost:5000/images/3269aad9196a17c3d17a9562f49cc835.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:05:12'),
(295, 'GI PIPE china S20', 7, 2269, 2289, 'e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'http://localhost:5000/images/e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:05:40'),
(296, 'GI PIPE china S40', 8, 1822, 1832, 'e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'http://localhost:5000/images/e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:06:39'),
(297, 'GI PIPE local S20', 5, 3800, 3850, 'e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'http://localhost:5000/images/e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:06:59'),
(298, 'GI-PIPE local S40', 5, 4900, 4950, 'e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'http://localhost:5000/images/e50340dc3ed2796dbf1bab85661aaa1a.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:07:17'),
(299, 'C-purlins Bl', 9, 974, 987, '45745185f4782fca6d93969ee5cd5a19.jpg', 'http://localhost:5000/images/45745185f4782fca6d93969ee5cd5a19.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:08:10'),
(300, 'C-purlin Gl', 10, 835, 845, '45745185f4782fca6d93969ee5cd5a19.jpg', 'http://localhost:5000/images/45745185f4782fca6d93969ee5cd5a19.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:08:38'),
(301, 'Plain round bar', 8, 1527, 1537, '4fa1e3a5f9675806d0eca11b2e92b832.jpg', 'http://localhost:5000/images/4fa1e3a5f9675806d0eca11b2e92b832.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:09:19'),
(302, 'Square bar', 7, 1480, 1500, '29405db8f48fdd5f3d405a091d192727.jpg', 'http://localhost:5000/images/29405db8f48fdd5f3d405a091d192727.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:09:42'),
(303, 'Tubular bar', 8, 1987, 2000, '85b9ba65a5ea76a975ffb638a6ae17e3.jpg', 'http://localhost:5000/images/85b9ba65a5ea76a975ffb638a6ae17e3.jpg', 'Bars and Pipes', '0000-00-00 00:00:00', '2024-06-03 15:10:10'),
(304, 'Aluminum Screen 4', 10, 3780, 3800, '950a30b37421dbddc82c2da113e9de9f.jpg', 'http://localhost:5000/images/950a30b37421dbddc82c2da113e9de9f.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:10:43'),
(305, 'Cylinder hinges', 15, 55, 69, '055aa65f0dc91ea06b0404bf1c73efe4.jpg', 'http://localhost:5000/images/055aa65f0dc91ea06b0404bf1c73efe4.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:11:07'),
(306, 'Flat bar', 8, 3200, 3245, '18a9128dede0ecd761f0227dee0f30b5.jpg', 'http://localhost:5000/images/18a9128dede0ecd761f0227dee0f30b5.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:11:40'),
(307, 'Hardware cloth 1-8', 9, 937, 988, '4a25f725dbd743a5532c9599be7d6ae4.jpg', 'http://localhost:5000/images/4a25f725dbd743a5532c9599be7d6ae4.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:14:13'),
(308, 'Kawaguchi LPG Gas Torch', 12, 852, 867, '20f1d14e99f4b76fa8b11f7a7159957e.jpg', 'http://localhost:5000/images/20f1d14e99f4b76fa8b11f7a7159957e.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:15:15'),
(309, 'KYK turnbuckle', 20, 133, 156, '8ccead42f8e0c1c789a5712a81a5f758.jpg', 'http://localhost:5000/images/8ccead42f8e0c1c789a5712a81a5f758.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:15:46'),
(310, 'Steel brush penguin', 22, 55, 65, '881fd1b9ed75493eeced7a6ad9f229fb.jpg', 'http://localhost:5000/images/881fd1b9ed75493eeced7a6ad9f229fb.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:16:28'),
(311, 'Master brand cutting outfit', 5, 5720, 5780, '61ccb75d3d7482011a81135101fbce84.jpg', 'http://localhost:5000/images/61ccb75d3d7482011a81135101fbce84.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:16:59'),
(312, 'Nihonweld welding rod n6013', 14, 616, 632, '4cb3d40085851c6c5292660b9f1f9bdb.jpg', 'http://localhost:5000/images/4cb3d40085851c6c5292660b9f1f9bdb.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:17:30'),
(313, 'Nihonweld Welding Rod N6011', 13, 266, 275, '4f2021422b17860bcb46ce8c7c6695a6.jpg', 'http://localhost:5000/images/4f2021422b17860bcb46ce8c7c6695a6.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:18:14'),
(314, 'Nihonweld Welding Rod N7018', 7, 3360, 3375, 'b547739da0b06195ea718ba3deefede5.jpg', 'http://localhost:5000/images/b547739da0b06195ea718ba3deefede5.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:19:19'),
(315, 'Pillow block', 9, 1194, 1210, 'd6f16949c5e48e3559f3f97182ea1729.jpg', 'http://localhost:5000/images/d6f16949c5e48e3559f3f97182ea1729.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:19:47'),
(316, 'Scaffolding set S20', 6, 2842, 2890, '635681812183b4ff3f009e039f85d69c.jpg', 'http://localhost:5000/images/635681812183b4ff3f009e039f85d69c.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:20:13'),
(317, 'Steel matting', 8, 1900, 1990, '6f80c049b26c0f674d0d492e97de58ae.jpg', 'http://localhost:5000/images/6f80c049b26c0f674d0d492e97de58ae.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:20:48'),
(318, 'Telescopic--U', 18, 260, 270, 'ba2cf8fc7fe5554c5ad404b56802174a.jpg', 'http://localhost:5000/images/ba2cf8fc7fe5554c5ad404b56802174a.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:21:36'),
(319, 'Tigweld filler', 11, 1050, 1070, '87ef049681747e5d192e4b14098331a2.jpg', 'http://localhost:5000/images/87ef049681747e5d192e4b14098331a2.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:23:37'),
(320, 'Turnbuckle', 25, 98, 110, '5076f5140332056fe66d8998676568ce.jpg', 'http://localhost:5000/images/5076f5140332056fe66d8998676568ce.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:24:01'),
(321, 'Twisted-Wire-Cup-Brush', 19, 120, 135, '3bd1e7608f85f0861734b79798cfe3ca.jpg', 'http://localhost:5000/images/3bd1e7608f85f0861734b79798cfe3ca.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:25:47'),
(322, 'Tyrolit-ultra-thin-cutting-disc', 20, 105, 115, '7da7521cb44d8bc35639d207307ab379.jpg', 'http://localhost:5000/images/7da7521cb44d8bc35639d207307ab379.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:27:51'),
(323, 'Tyrolit-metal-grinding-disc', 17, 110, 120, '6d102024faa43dd2b4afc9e92ec7a268.jpg', 'http://localhost:5000/images/6d102024faa43dd2b4afc9e92ec7a268.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:26:44'),
(324, 'Tyrolit-metal-cutting-disc', 10, 630, 635, '166d3f9c3edc682500b520c3654b8759.jpg', 'http://localhost:5000/images/166d3f9c3edc682500b520c3654b8759.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:29:56'),
(325, 'Welding handle', 14, 376, 386, '8a70eb16a00a506a25c620c6f2200cf9.jpg', 'http://localhost:5000/images/8a70eb16a00a506a25c620c6f2200cf9.jpg', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:29:10'),
(326, 'Welding mask with handle', 20, 68, 75, '6bb63738263a25a9148e4c5672ccce39.png', 'http://localhost:5000/images/6bb63738263a25a9148e4c5672ccce39.png', 'Hardware and Tools', '0000-00-00 00:00:00', '2024-06-03 15:31:30'),
(327, 'Deformed-bar-(G33)', 9, 650, 675, '6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'http://localhost:5000/images/6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'Rebars', '0000-00-00 00:00:00', '2024-06-03 15:32:13'),
(328, 'Deformed-bar (G40)', 8, 753, 795, '6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'http://localhost:5000/images/6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'Rebars', '0000-00-00 00:00:00', '2024-06-03 15:32:31'),
(329, 'Deformed-bar(G60)', 15, 176, 190, '6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'http://localhost:5000/images/6c87a4eed37e498dffc67e2f0e6e3808.jpg', 'Rebars', '0000-00-00 00:00:00', '2024-06-03 15:32:44'),
(330, 'GI-wire #16', 7, 1300, 1350, '8bc7a4a208ad6a9e32b8697da134eb65.jpg', 'http://localhost:5000/images/8bc7a4a208ad6a9e32b8697da134eb65.jpg', 'GI Wire', '0000-00-00 00:00:00', '2024-06-03 15:37:28'),
(331, 'Sandlex handsaw blade', 21, 50, 55, 'debfd49cc6d26bf8f39fc9f0e553a43d.jpg', 'http://localhost:5000/images/debfd49cc6d26bf8f39fc9f0e553a43d.jpg', 'Cutting Wheels and Blades', '0000-00-00 00:00:00', '2024-06-03 15:37:49'),
(332, 'Tailin-cutting-wheel 14', 18, 198, 210, 'bbe01e69d52f1b080bec218509e9ff81.jpg', 'http://localhost:5000/images/bbe01e69d52f1b080bec218509e9ff81.jpg', 'Cutting Wheels and Blades', '0000-00-00 00:00:00', '2024-06-03 15:37:07'),
(333, 'Tyrolit-ultra-thin-cutting-disc 4', 20, 105, 115, '7da7521cb44d8bc35639d207307ab379.jpg', 'http://localhost:5000/images/7da7521cb44d8bc35639d207307ab379.jpg', 'Cutting Wheels and Blades', '0000-00-00 00:00:00', '2024-06-03 15:36:51'),
(334, 'Tyrolit-metal-grinding-disc 4', 10, 630, 670, '6d102024faa43dd2b4afc9e92ec7a268.jpg', 'http://localhost:5000/images/6d102024faa43dd2b4afc9e92ec7a268.jpg', 'Cutting Wheels and Blades', '0000-00-00 00:00:00', '2024-06-03 15:36:37'),
(335, 'Tyrolit-metal-cutting-disc', 12, 630, 646, '166d3f9c3edc682500b520c3654b8759.jpg', 'http://localhost:5000/images/166d3f9c3edc682500b520c3654b8759.jpg', 'Cutting Wheels and Blades', '0000-00-00 00:00:00', '2024-06-03 15:38:20'),
(336, 'Bosny-Silicone-Sealant', 19, 180, 190, 'ebf105f2174d39437464fdc437856980.jpg', 'http://localhost:5000/images/ebf105f2174d39437464fdc437856980.jpg', 'Sealants', '0000-00-00 00:00:00', '2024-06-03 15:39:00'),
(337, 'SILICONE-SEALANT-JOINSIL', 22, 165, 175, '01727a4fd0e702d54aa57218c280ac1e.jpg', 'http://localhost:5000/images/01727a4fd0e702d54aa57218c280ac1e.jpg', 'Sealants', '0000-00-00 00:00:00', '2024-06-03 15:39:19'),
(338, 'Bostik-el-henera', 9, 770, 790, '341d2c00b791ee0aab91244bcc3c2de8.jpg', 'http://localhost:5000/images/341d2c00b791ee0aab91244bcc3c2de8.jpg', 'Sealants', '0000-00-00 00:00:00', '2024-06-03 15:39:36'),
(339, 'NO-MORE-NAIL-BOSNY', 20, 186, 195, '88171a4d0687fba902ae31ae43593861.jpg', 'http://localhost:5000/images/88171a4d0687fba902ae31ae43593861.jpg', 'Sealants', '0000-00-00 00:00:00', '2024-06-03 15:40:09'),
(340, 'Addmix Protect', 15, 45, 55, '0133ca4278ca4b7050b01c2c986ca1e8.png', 'http://localhost:5000/images/0133ca4278ca4b7050b01c2c986ca1e8.png', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:40:41'),
(341, 'Addmix Ultra', 12, 45, 60, '71dcf012fd3f149ae5487867117ac538.png', 'http://localhost:5000/images/71dcf012fd3f149ae5487867117ac538.png', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:41:01'),
(342, 'Bostik Rugby Excel 4 Liters', 14, 784, 796, 'a9c4583e193091ae92a939594354b28a.jpg', 'http://localhost:5000/images/a9c4583e193091ae92a939594354b28a.jpg', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:41:55'),
(343, 'Devcon Plastic Steel Epoxy', 10, 188, 125, '3673384c5921e0dd67411e30d4c4a147.jpg', 'http://localhost:5000/images/3673384c5921e0dd67411e30d4c4a147.jpg', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:42:19'),
(344, 'Metylan Wallpaper Paste', 18, 462, 475, '1909c97197af79735c68521c1918991a.jpg', 'http://localhost:5000/images/1909c97197af79735c68521c1918991a.jpg', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:42:41'),
(345, 'Pioneer Mighty Bond', 20, 25, 30, '4b9ba0b5eb84a6a638bdac84e8a314d7.jpg', 'http://localhost:5000/images/4b9ba0b5eb84a6a638bdac84e8a314d7.jpg', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:43:04'),
(346, 'Mighty Gasket', 13, 105, 115, '6dfc56a9ad517880dfd22cd861e8c5ee.jpg', 'http://localhost:5000/images/6dfc56a9ad517880dfd22cd861e8c5ee.jpg', 'Adhesives', '0000-00-00 00:00:00', '2024-06-03 15:43:28'),
(347, 'GYPSUM BOARD STAR BRAND', 16, 490, 500, '228e72d693851a955428c1814ff59952.png', 'http://localhost:5000/images/228e72d693851a955428c1814ff59952.png', 'Boards and Panels', '0000-00-00 00:00:00', '2024-06-03 15:43:58'),
(348, 'Hardieflex', 11, 1852, 1875, 'feb8c73670108d47002040a22e5be6b3.png', 'http://localhost:5000/images/feb8c73670108d47002040a22e5be6b3.png', 'Boards and Panels', '0000-00-00 00:00:00', '2024-06-03 15:44:22'),
(349, 'KNAUF StandardShield', 17, 550, 555, 'b4dbd150d34a18618fb44e6680903c18.jpg', 'http://localhost:5000/images/b4dbd150d34a18618fb44e6680903c18.jpg', 'Boards and Panels', '0000-00-00 00:00:00', '2024-06-03 15:44:39'),
(350, 'MR Gypsum Board', 12, 820, 835, 'c66b25af9c360750581900c383293a55.jpg', 'http://localhost:5000/images/c66b25af9c360750581900c383293a55.jpg', 'Boards and Panels', '0000-00-00 00:00:00', '2024-06-03 15:45:10'),
(351, 'Blind Rivet', 25, 350, 360, '46a5df2eebe7658be63a1fd5f9643ba0.jpg', 'http://localhost:5000/images/46a5df2eebe7658be63a1fd5f9643ba0.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:45:43'),
(352, 'Carrying Channel', 18, 130, 135, '28e4b67c4cde31b6649827c2a4bb4fef.jpg', 'http://localhost:5000/images/28e4b67c4cde31b6649827c2a4bb4fef.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:46:07'),
(353, 'Ceiling Manhole Steel White', 9, 2898, 2913, '9d4f90bf44671e65cb632ed3d4e9860e.jpg', 'http://localhost:5000/images/9d4f90bf44671e65cb632ed3d4e9860e.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:46:24'),
(354, 'Gardner', 14, 1320, 1330, '6158a0822ed74d593f7370b6837a1081.jpg', 'http://localhost:5000/images/6158a0822ed74d593f7370b6837a1081.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:46:49'),
(355, 'L Moulding', 22, 250, 255, '6ebdc9c68b35e9d8aa8c313b3c50ba19.png', 'http://localhost:5000/images/6ebdc9c68b35e9d8aa8c313b3c50ba19.png', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:47:19'),
(356, 'Metal Studs', 28, 215, 220, '7f4e9f5de78795611b8decd43a11b49c.png', 'http://localhost:5000/images/7f4e9f5de78795611b8decd43a11b49c.png', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:47:59'),
(357, 'Metal Tracks', 27, 190, 205, '701c3b863ad6b6438e8d67f416460e11.jpg', 'http://localhost:5000/images/701c3b863ad6b6438e8d67f416460e11.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:48:13'),
(358, 'Shadowline Wall', 25, 119, 125, '5974ec311d409a2b79068f2473c459a3.jpg', 'http://localhost:5000/images/5974ec311d409a2b79068f2473c459a3.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:48:42'),
(359, 'W Clip', 30, 5, 15, '7b6d959ef02b3086b611914d005ef965.jpg', 'http://localhost:5000/images/7b6d959ef02b3086b611914d005ef965.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:49:09'),
(360, 'Wall Angle', 28, 55, 65, '7d3b0d12b3025161af55d376123bf6e1.jpg', 'http://localhost:5000/images/7d3b0d12b3025161af55d376123bf6e1.jpg', 'Hardware and Accessories', '0000-00-00 00:00:00', '2024-06-03 15:49:38'),
(361, 'KYK Aviation Snip Straight', 14, 262, 270, 'c6d8f3b6373090c99a81a293ebfce619.jpg', 'http://localhost:5000/images/c6d8f3b6373090c99a81a293ebfce619.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 15:51:48'),
(362, 'KYK Tin Snip Vanadium', 19, 544, 555, 'bd98074aa7519d9f3eef794c75ca11c7.jpg', 'http://localhost:5000/images/bd98074aa7519d9f3eef794c75ca11c7.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 15:51:38'),
(363, 'Stanley 14-563 Straight Cut Aviation Snips', 17, 426, 436, '13896cdfdc63c5c9a25940170fdace21.jpg', 'http://localhost:5000/images/13896cdfdc63c5c9a25940170fdace21.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 15:51:21'),
(364, 'Stanley Riveter Chrome', 15, 570, 585, 'ec58c6ed2bb4f7ac929fdd5a7a13665d.jpg', 'http://localhost:5000/images/ec58c6ed2bb4f7ac929fdd5a7a13665d.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 15:53:49'),
(365, 'Utility Box', 45, 35, 45, '61be41d0313dfc850dbdfaea0e8e7ba9.jpg', 'http://localhost:5000/images/61be41d0313dfc850dbdfaea0e8e7ba9.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:54:38'),
(366, 'Square Box', 50, 40, 45, '79886f0cf2c1573e2dc0fb5999719509.jpg', 'http://localhost:5000/images/79886f0cf2c1573e2dc0fb5999719509.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:54:57'),
(367, 'PVC Square Box Cover', 60, 15, 20, '105c23a26946f29bbd8e447bb4b91790.jpg', 'http://localhost:5000/images/105c23a26946f29bbd8e447bb4b91790.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:58:14'),
(368, 'PVC Electrical Pipe Thickwall', 35, 170, 180, '850bf183314fa34d9e776cccbcc218af.jpg', 'http://localhost:5000/images/850bf183314fa34d9e776cccbcc218af.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:58:39'),
(369, 'Metal Utility Box', 40, 43, 48, 'bfadbd57483b8746aa48d12136dcece8.jpg', 'http://localhost:5000/images/bfadbd57483b8746aa48d12136dcece8.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:59:05'),
(370, 'Metal Junction Box', 35, 55, 60, '437f46bf035335e0803887c3ea74f0bc.jpg', 'http://localhost:5000/images/437f46bf035335e0803887c3ea74f0bc.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 15:59:41'),
(371, 'Electrical Pipe', 30, 215, 224, '9f307a5d7b0857d3a067e31d55e23e24.jpg', 'http://localhost:5000/images/9f307a5d7b0857d3a067e31d55e23e24.jpg', 'Pipes and Boxes', '0000-00-00 00:00:00', '2024-06-03 16:00:08'),
(372, 'Short Elbow', 22, 14, 25, '7b6f0eb26b5089c78aadd9a0215ce8d2.jpg', 'http://localhost:5000/images/7b6f0eb26b5089c78aadd9a0215ce8d2.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:03:34'),
(374, 'RSC Coupling', 20, 20, 55, 'a95f010199affc4e249b94d778a9ad39.jpg', 'http://localhost:5000/images/a95f010199affc4e249b94d778a9ad39.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:02:50'),
(375, 'Royu Moulding', 16, 55, 60, '64882bb835cc8dacf952ad23484dffb3.jpg', 'http://localhost:5000/images/64882bb835cc8dacf952ad23484dffb3.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:04:00'),
(376, 'PVC Electrical Locknut', 40, 5, 13, '4f083e9caa8c46e2cf85bf353ffb6fd1.jpg', 'http://localhost:5000/images/4f083e9caa8c46e2cf85bf353ffb6fd1.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:04:34'),
(377, 'Neltex Junction Box', 25, 35, 45, 'a86228621b422e599188019aed5c4858.jpg', 'http://localhost:5000/images/a86228621b422e599188019aed5c4858.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:05:23'),
(378, 'Male Adapter', 38, 12, 18, 'a4f97b167845c485ec31e8cb62fcfde1.jpg', 'http://localhost:5000/images/a4f97b167845c485ec31e8cb62fcfde1.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:07:39'),
(379, 'Long Elbow', 12, 188, 198, '3f47263d829df74af350f0416419cb7a.jpg', 'http://localhost:5000/images/3f47263d829df74af350f0416419cb7a.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:08:02'),
(380, 'Long Electrical Long Elbow', 18, 45, 55, '3f47263d829df74af350f0416419cb7a.jpg', 'http://localhost:5000/images/3f47263d829df74af350f0416419cb7a.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:08:20'),
(381, 'LOCKNUT 2-1-2', 19, 39, 47, '211ddc0f56dee0e3c8109bb44ddebd85.jpg', 'http://localhost:5000/images/211ddc0f56dee0e3c8109bb44ddebd85.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:08:41'),
(382, 'Junction Box Cover', 28, 15, 25, 'd312db7cd4b4e7f29b1050c366ccd034.jpg', 'http://localhost:5000/images/d312db7cd4b4e7f29b1050c366ccd034.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:09:09'),
(383, 'EMT Coupling', 26, 81, 90, '61638fd7338c59cfa7493b13194dedbd.jpg', 'http://localhost:5000/images/61638fd7338c59cfa7493b13194dedbd.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:09:29'),
(384, 'EMT Connector', 22, 32, 43, '5af190ce53aba12e9d7a7f5f06b229b6.jpg', 'http://localhost:5000/images/5af190ce53aba12e9d7a7f5f06b229b6.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:09:44'),
(385, 'Clean Out Adapter', 16, 56, 65, '6d50d5b690413de73c17ab0683746482.jpg', 'http://localhost:5000/images/6d50d5b690413de73c17ab0683746482.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:10:05'),
(386, 'Bushing Reducer', 20, 18, 26, '7e9d6fc8624a07901f02262513a0b587.jpg', 'http://localhost:5000/images/7e9d6fc8624a07901f02262513a0b587.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:10:24'),
(387, 'Atlanta Moulding', 27, 50, 55, '15de690504cf75c9f1eef379a1857880.jpg', 'http://localhost:5000/images/15de690504cf75c9f1eef379a1857880.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:10:41'),
(388, 'PVC Pipe', 17, 875, 895, '850bf183314fa34d9e776cccbcc218af.jpg', 'http://localhost:5000/images/850bf183314fa34d9e776cccbcc218af.jpg', 'Pipes', '0000-00-00 00:00:00', '2024-06-03 16:12:36'),
(389, 'PPR Pipe', 12, 665, 675, 'd671f4ccb985d0c3eca265b55cfbe29c.jpg', 'http://localhost:5000/images/d671f4ccb985d0c3eca265b55cfbe29c.jpg', 'Pipes', '0000-00-00 00:00:00', '2024-06-03 16:13:33'),
(390, 'Tee with Thread', 35, 10, 15, 'be6079d0eede0956bb4149675c271d74.jpg', 'http://localhost:5000/images/be6079d0eede0956bb4149675c271d74.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:14:23'),
(391, 'Rubber Bushing', 28, 19, 25, '2f378491eb90af1935e09d0d54d6012c.jpg', 'http://localhost:5000/images/2f378491eb90af1935e09d0d54d6012c.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:14:45'),
(392, 'PPR Endcap', 44, 6, 13, '5db8d12752f20fe36aa212f157198153.jpg', 'http://localhost:5000/images/5db8d12752f20fe36aa212f157198153.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:15:25'),
(393, 'PPR Coupling', 26, 25, 35, '77c71cccc9effa19c6f1193d87c09bc0.jpg', 'http://localhost:5000/images/77c71cccc9effa19c6f1193d87c09bc0.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:15:50'),
(394, 'PPR Lucky Union Socket Type', 14, 530, 543, 'fd993e063a2f0e9d19fbdd233f158775.jpg', 'http://localhost:5000/images/fd993e063a2f0e9d19fbdd233f158775.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:16:18'),
(395, 'Neltex Tee Sanitary', 12, 225, 235, '59a7f1def32aa4f418f34bbefc664d37.png', 'http://localhost:5000/images/59a7f1def32aa4f418f34bbefc664d37.png', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:16:41'),
(396, 'Neltex Solvent', 18, 140, 150, 'cb03328eaacda27a65046acce4a76355.jpg', 'http://localhost:5000/images/cb03328eaacda27a65046acce4a76355.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:17:13'),
(397, 'Neltex PVCU End Cap', 30, 10, 15, 'fe50421049df77933a1fd1c35dba646b.jpg', 'http://localhost:5000/images/fe50421049df77933a1fd1c35dba646b.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:17:39'),
(398, 'Neltex PVC Saniline Elbow', 15, 817, 825, '66696d2e2db9bb8589f6b797a0021e8b.jpg', 'http://localhost:5000/images/66696d2e2db9bb8589f6b797a0021e8b.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:18:36'),
(399, 'Neltex Coupling', 20, 90, 95, '0989c01f5c86bb5d23e92b885c74f1db.jpg', 'http://localhost:5000/images/0989c01f5c86bb5d23e92b885c74f1db.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:19:21'),
(400, 'Neltex Clean Out', 16, 572, 585, '470ee230711a1257004d988022c78818.jpg', 'http://localhost:5000/images/470ee230711a1257004d988022c78818.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:19:50'),
(401, 'Neltex Tee Reducer', 22, 27, 35, '59a7f1def32aa4f418f34bbefc664d37.png', 'http://localhost:5000/images/59a7f1def32aa4f418f34bbefc664d37.png', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:20:56'),
(402, 'Neltex Sanitary Bushing Reducer', 17, 422, 435, '3b5f97c4047261f089ca4a287c6860ab.jpg', 'http://localhost:5000/images/3b5f97c4047261f089ca4a287c6860ab.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:21:37'),
(403, 'Neltex PPR Endcap', 40, 6, 12, '5db8d12752f20fe36aa212f157198153.jpg', 'http://localhost:5000/images/5db8d12752f20fe36aa212f157198153.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:22:05'),
(404, 'Lucky Elbow 90', 12, 1210, 1215, '77f7f7d9cb5f14ea40a433b782c64295.jpg', 'http://localhost:5000/images/77f7f7d9cb5f14ea40a433b782c64295.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:22:54'),
(405, 'Lucky Clean Out', 18, 60, 65, 'd8876163e4e8c07552569c9c60f37e7a.jpg', 'http://localhost:5000/images/d8876163e4e8c07552569c9c60f37e7a.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:23:24'),
(406, 'Lucky Waterline Elbow with Thread 1/2', 30, 10, 15, '91f68fad20b575ede2b1f7bc9ed21c82.jpg', 'http://localhost:5000/images/91f68fad20b575ede2b1f7bc9ed21c82.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:23:45'),
(407, 'Lucky Sanitary Elbow 45', 14, 999, 1007, 'b1275ca054d6d3c8fc44c52609123d75.jpg', 'http://localhost:5000/images/b1275ca054d6d3c8fc44c52609123d75.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:24:10'),
(408, 'Lucky PPR Tee', 22, 40, 45, '65594a74e30ae782212179ec1509d191.jpg', 'http://localhost:5000/images/65594a74e30ae782212179ec1509d191.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:27:31'),
(409, 'Lucky PPR Gate', 15, 585, 595, '6a1db99f51ba17fe1152b91489427a4c.jpg', 'http://localhost:5000/images/6a1db99f51ba17fe1152b91489427a4c.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:27:52'),
(410, 'Lucky PPR Elbow', 20, 35, 45, 'c8ec70292f7a9fd27bda8236a80d3213.jpg', 'http://localhost:5000/images/c8ec70292f7a9fd27bda8236a80d3213.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:28:18'),
(411, 'Lucky PPR Coupling', 28, 20, 30, '9b77f90fd01cc03e2bfc9e6d883cc1dd.jpg', 'http://localhost:5000/images/9b77f90fd01cc03e2bfc9e6d883cc1dd.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:28:51'),
(412, 'Lucky P-Trap', 19, 131, 142, '63b167fa4655144e3baa661905c1f7a4.jpg', 'http://localhost:5000/images/63b167fa4655144e3baa661905c1f7a4.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:29:16'),
(413, 'Lucky Waterline Tee', 23, 128, 136, '5e807c7f5418529be051225975256ca4.jpg', 'http://localhost:5000/images/5e807c7f5418529be051225975256ca4.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:30:01'),
(414, 'GI Nipple', 25, 97, 55, '10819b8447c12f3088a7f06d10bca5e2.jpg', 'http://localhost:5000/images/10819b8447c12f3088a7f06d10bca5e2.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:30:27'),
(415, 'Galvanize Horse Clamp', 22, 20, 30, '719169b98df62c766d4fa250921e97d7.jpg', 'http://localhost:5000/images/719169b98df62c766d4fa250921e97d7.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:30:44'),
(416, 'GI End Plug', 18, 70, 75, 'f69122970d6f1f826b408f6e7cac611b.jpg', 'http://localhost:5000/images/f69122970d6f1f826b408f6e7cac611b.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:31:34'),
(417, 'Female Hose Coupling', 29, 25, 30, '2675d473b66d2657858f795f8357568a.jpg', 'http://localhost:5000/images/2675d473b66d2657858f795f8357568a.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:31:56'),
(418, 'Elbow', 30, 45, 50, '0b11e16f4f20b1d7e3a92ebabbe94757.jpg', 'http://localhost:5000/images/0b11e16f4f20b1d7e3a92ebabbe94757.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:32:16'),
(419, 'Elbow with Thread', 34, 20, 25, '91f68fad20b575ede2b1f7bc9ed21c82.jpg', 'http://localhost:5000/images/91f68fad20b575ede2b1f7bc9ed21c82.jpg', 'Fittings and Adapters', '0000-00-00 00:00:00', '2024-06-03 16:32:38'),
(420, 'Boscolastic Teaser', 10, 5170, 5180, '4179a3354f99de11933e754af71e1f81.png', 'http://localhost:5000/images/4179a3354f99de11933e754af71e1f81.png', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:33:31'),
(421, 'Captain Shield', 20, 45, 55, 'ebf173fc767ed1b4999c395f587a176c.png', 'http://localhost:5000/images/ebf173fc767ed1b4999c395f587a176c.png', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:34:36'),
(422, 'Sika Davco K11 Flex', 14, 2650, 2670, '7a6dcf6287067990943053da54b3086b.png', 'http://localhost:5000/images/7a6dcf6287067990943053da54b3086b.png', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:34:15'),
(423, 'Bostik Powerseal', 18, 539, 545, 'd19b64b33e9ffa1e32ece7e99f02c35e.jpg', 'http://localhost:5000/images/d19b64b33e9ffa1e32ece7e99f02c35e.jpg', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:35:05'),
(424, 'Novtek Concrete', 16, 385, 390, 'ccca09a80adc070b6d00544eac5ea41a.jpg', 'http://localhost:5000/images/ccca09a80adc070b6d00544eac5ea41a.jpg', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:35:41'),
(425, 'Novtek Waterproofing', 12, 2700, 2715, '1dd08d51d2453888201fe4404bd17241.jpg', 'http://localhost:5000/images/1dd08d51d2453888201fe4404bd17241.jpg', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:35:58'),
(426, 'Plaster Bonding Adhesive', 17, 461, 470, 'b140a7296229f8096fbfff1abf275f29.jpg', 'http://localhost:5000/images/b140a7296229f8096fbfff1abf275f29.jpg', 'Waterproofing Materials', '0000-00-00 00:00:00', '2024-06-03 16:36:20'),
(431, 'L-903 Undermount basin', 14, 1590, 1620, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(432, 'L-011 Undermount basin', 12, 1590, 1620, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(433, 'L-001B Wall Hung basin towel holder', 8, 1290, 1320, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(434, 'L-001 Wall Hung basin', 10, 790, 820, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(435, '804 Full Pedestal basin', 6, 2390, 2420, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(436, '323 Countertop basin', 15, 2490, 2520, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(437, '322A Countertop basin', 7, 2490, 2520, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(438, '314 Full Pedestal basin', 11, 2090, 2120, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(439, '219A Countertop basin', 9, 1890, 1920, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(440, '213 Half Pedestal basin', 5, 2090, 2120, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(441, '203 Countertop basin', 12, 1890, 1920, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(442, '159 Countertop basin', 13, 2890, 2930, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(443, '118A Countertop basin', 14, 2490, 2540, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(444, '115A Countertop basin', 8, 2290, 2335, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(445, '105A Countertop basin', 9, 1890, 1920, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(446, 'MRL6060G MIRROR WITH LIGHTS', 11, 2500, 2589, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(447, 'ML8060 MIRROR WITH LIGHTS', 6, 4990, 5100, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(448, 'ML6060 MIRROR WITH LED LIGHTS', 8, 6990, 7045, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(449, 'MLC5070 MIRROR CABINET WITH LED LIGHTS', 5, 8590, 8645, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(450, 'MC4060 MIRROR CABINET', 7, 4590, 4650, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(451, 'MC6060 MIRROR CABINET', 10, 6790, 6635, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(452, 'MC9060 MIRROR CABINET', 4, 9990, 10070, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(453, 'MC5050 MIRROR CABINET', 12, 3990, 4050, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(454, 'MC3060 MIRROR CABINET', 9, 3990, 4075, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(455, 'ENS200', 6, 16990, 17190, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(456, 'ENS180', 8, 12990, 13090, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(457, 'ENS160', 10, 12090, 12175, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(458, 'ENS150', 7, 11590, 11670, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(459, 'ENS140', 8, 11590, 11660, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(460, 'ENS130', 9, 11590, 11650, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(461, 'ENS120', 5, 9990, 10040, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(462, 'ENS110', 6, 9990, 10030, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(463, 'ENS100', 7, 9990, 10020, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(464, 'ENR90', 9, 8990, 9030, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(465, 'ENC90', 11, 8990, 9020, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(466, 'ENC129', 6, 9990, 10030, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(467, 'ENC128', 8, 8990, 9015, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(468, 'ENC100', 7, 9990, 10035, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(469, 'URINAL S918', 10, 2090, 2125, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(470, 'URINAL S-7023', 8, 2790, 2833, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(471, 'GV-9815 URINAL FLUSH VALVE', 15, 1399, 1420, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(472, 'GV-9814 URINAL FLUSH VALVE', 13, 1049, 1089, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(473, 'SP-35N SINGLE POINT WATER HEATER', 7, 4899, 4985, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(474, 'SP-35 SINGLE POINT WATER HEATER', 9, 5590, 5645, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(475, 'MP-55 MULTIPOINT WATER HEATER', 6, 6699, 6735, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(476, 'GV WS990 ECONOMIC TOILET', 5, 4190, 4235, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(477, 'GV WS890 ECONOMIC WASHDOWN TOILET', 8, 3590, 3645, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(478, 'CT-6881 TWO-PIECE WATER CLOSET WAITH BASIN', 10, 3590, 3655, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(479, '8370 ONE-PIECE WATERCLOSET', 4, 9990, 1089, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `product` (`id`, `name`, `stocks`, `buyingPrice`, `sellingPrice`, `image`, `url`, `category`, `createdAt`, `updatedAt`) VALUES
(480, '8350 ONE-PIECE WATERCLOSET', 6, 9990, 10055, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(481, '8059 ONE-PIECE WATERCLOSET', 7, 9990, 10075, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(482, '8001 ONE-PIECE WATERCLOSET', 9, 6990, 7065, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=483;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
