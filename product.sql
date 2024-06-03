-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 03:10 PM
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
(220, 'BOSCH-GWS-060-ANGLE-GRINDER', 14, 2420, 2550, 'd2f89fa09ba55686e83bc8e2e00421ab.jpg', 'http://localhost:5000/images/d2f89fa09ba55686e83bc8e2e00421ab.jpg', 'Angle Grinders', '0000-00-00 00:00:00', '2024-06-03 12:01:06'),
(221, 'Lotus-angle-grinder', 11, 1910, 2075, '237bececbdc0099bf51762f377909aa1.jpg', 'http://localhost:5000/images/237bececbdc0099bf51762f377909aa1.jpg', 'Angle Grinders', '0000-00-00 00:00:00', '2024-06-03 12:01:56'),
(222, 'Makita-GA7020 Angle grinder', 8, 7839, 7950, '791bdbeb28ec61526f16be3c9326abc8.jpg', 'http://localhost:5000/images/791bdbeb28ec61526f16be3c9326abc8.jpg', 'Angle Grinders', '0000-00-00 00:00:00', '2024-06-03 12:02:36'),
(223, 'A0087-Diamond-cutting-wheel', 20, 244, 300, '6b9568458e7eb0778efab45f549b0bae.jpg', 'http://localhost:5000/images/6b9568458e7eb0778efab45f549b0bae.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:03:42'),
(224, 'Bosun-diamond-cutting-wheel', 18, 234, 275, '881439a9c6d10a2239db0055763da105.jpg', 'http://localhost:5000/images/881439a9c6d10a2239db0055763da105.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:04:22'),
(225, 'Craftright-tile-saw-cutter', 9, 909, 1080, '75de15837fa39264f91784dcce5a92ef.jpg', 'http://localhost:5000/images/75de15837fa39264f91784dcce5a92ef.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:04:44'),
(226, 'Irwin-continuous-diamond-cutting', 11, 375, 450, '5313d318c38eaa25e7e320e8e4115659.jpg', 'http://localhost:5000/images/5313d318c38eaa25e7e320e8e4115659.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:05:04'),
(227, 'Irwin-segmented-diamond-cutting', 13, 341, 410, 'c393398b94d78ee289b1313af6fe425a.jpg', 'http://localhost:5000/images/c393398b94d78ee289b1313af6fe425a.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:05:26'),
(228, 'Irwin-turbo-diamond-cutting-blade', 10, 425, 500, 'a7844fb424d4d6c14cf18234383ec088.jpg', 'http://localhost:5000/images/a7844fb424d4d6c14cf18234383ec088.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:05:41'),
(229, 'KYK-diamond-wheel', 14, 270, 340, '1c2150721814c13339eb88870fca406f.jpg', 'http://localhost:5000/images/1c2150721814c13339eb88870fca406f.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:06:03'),
(230, 'KYK-Diamond-Wheel-Thin', 9, 312, 376, 'ec04dfab6f35c083e77d43612d170c57.jpg', 'http://localhost:5000/images/ec04dfab6f35c083e77d43612d170c57.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:06:20'),
(231, 'Powerhouse-Diamond-Cutting-Wheel', 6, 520, 590, 'b928fe22e4a6163259f23648a3356e9a.jpg', 'http://localhost:5000/images/b928fe22e4a6163259f23648a3356e9a.jpg', 'Cutting Tools', '0000-00-00 00:00:00', '2024-06-03 12:07:21'),
(232, 'Redifix tile adhesive', 7, 967, 1100, 'bf21978fc195065ee769ce2f783d8f6f.jpg', 'http://localhost:5000/images/bf21978fc195065ee769ce2f783d8f6f.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 12:08:16'),
(233, 'ABCTile adhesive', 15, 300, 350, '87233d88e55c0fa355a71729dad3b85e.jpg', 'http://localhost:5000/images/87233d88e55c0fa355a71729dad3b85e.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 12:08:35'),
(234, 'Zemcoat-skimcoat', 19, 495, 540, '78f6ac12b4a6f3f185205b112e4741d8.jpg', 'http://localhost:5000/images/78f6ac12b4a6f3f185205b112e4741d8.jpg', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 12:09:05'),
(235, 'Tile-Max-Grout', 23, 75, 100, '12dd39d94bfb40a69653173de8e04f9d.png', 'http://localhost:5000/images/12dd39d94bfb40a69653173de8e04f9d.png', 'Tile Adhesives and Grout', '0000-00-00 00:00:00', '2024-06-03 12:09:42'),
(236, 'Tile-cutter-8-KTC211-KYK', 11, 216, 260, 'cc5f39198db922fee0ef6dee455c4577.jpg', 'http://localhost:5000/images/cc5f39198db922fee0ef6dee455c4577.jpg', 'Tile Cutters', '0000-00-00 00:00:00', '2024-06-03 12:10:03'),
(237, 'Amerilock footbolt', 16, 258, 450, 'dbacbf32ef5d20cdeb986ed637bf14ae.jpg', 'http://localhost:5000/images/dbacbf32ef5d20cdeb986ed637bf14ae.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:11:04'),
(238, 'Amerilock-Door-Chain bolt', 19, 286, 310, '3041f9b69f7936cbcea6cb8b1451474e.png', 'http://localhost:5000/images/3041f9b69f7936cbcea6cb8b1451474e.png', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:11:49'),
(239, 'Amerilock-door-knob-AL588', 21, 270, 300, '11e70f102082ffab1de9369e7406e7a9.jpg', 'http://localhost:5000/images/11e70f102082ffab1de9369e7406e7a9.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:12:06'),
(240, 'Butterfly-Lock-Install-Kit', 13, 345, 400, '24d5f3c95331bc81133f33c45d213137.jpg', 'http://localhost:5000/images/24d5f3c95331bc81133f33c45d213137.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:12:38'),
(241, 'Camel-drawer-lock', 22, 78, 90, '9d183d7c376a8701bacbd62626728bc6.jpg', 'http://localhost:5000/images/9d183d7c376a8701bacbd62626728bc6.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:13:11'),
(242, 'KYK-barrel-bolt 2', 25, 14, 23, '7b0374720c180ff97e1dbce7cbb3f1bc.jpg', 'http://localhost:5000/images/7b0374720c180ff97e1dbce7cbb3f1bc.jpg', 'Locks and Bolts', '0000-00-00 00:00:00', '2024-06-03 12:13:37'),
(243, 'Cabinet-handle round', 20, 59, 65, 'aeb95c5c3684eb4b155ec596620bc147.jpg', 'http://localhost:5000/images/aeb95c5c3684eb4b155ec596620bc147.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:14:21'),
(244, 'Cabinet-handle-6-flat', 18, 85, 100, 'adfd31098b140f6b53b521921df9bb09.jpg', 'http://localhost:5000/images/adfd31098b140f6b53b521921df9bb09.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:15:18'),
(245, 'China-door-hinges', 19, 32, 40, '7c6c55eb6d3a6f318e8bc4884d519183.jpg', 'http://localhost:5000/images/7c6c55eb6d3a6f318e8bc4884d519183.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:16:01'),
(246, 'Concealed-Hinges-C1-1-3', 21, 50, 65, '6edf7a316959cfe43573beb8a0ec4daf.png', 'http://localhost:5000/images/6edf7a316959cfe43573beb8a0ec4daf.png', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:16:44'),
(247, 'Cylinder-hinges', 14, 55, 69, '0381e63a955db595755815a860b9dbe9.jpg', 'http://localhost:5000/images/0381e63a955db595755815a860b9dbe9.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:17:45'),
(248, 'Door-roller-plastic-brown', 12, 124, 145, '26143b96eb48d70e395de59db8f9ba0e.jpg', 'http://localhost:5000/images/26143b96eb48d70e395de59db8f9ba0e.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:18:51'),
(249, 'Stanley-door-hinge', 17, 117, 130, '7a3e1274a14a173a1955d6ba608e7cac.jpg', 'http://localhost:5000/images/7a3e1274a14a173a1955d6ba608e7cac.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:23:10'),
(250, 'Top-Most-Great-Deals-Cabinet-Handle', 15, 215, 230, 'e1626cdd47f9ef864394fe9e798e7aef.jpg', 'http://localhost:5000/images/e1626cdd47f9ef864394fe9e798e7aef.jpg', 'Handles and Hinges', '0000-00-00 00:00:00', '2024-06-03 12:24:54'),
(251, 'Drawer-guide', 10, 590, 630, '98595403fc6cfb6f799c7bb8485311ea.jpg', 'http://localhost:5000/images/98595403fc6cfb6f799c7bb8485311ea.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 12:25:39'),
(252, 'Drawer-guide-black', 8, 786, 800, 'f0275e4fe1cdf59292d87f6b4602f404.jpg', 'http://localhost:5000/images/f0275e4fe1cdf59292d87f6b4602f404.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 12:26:06'),
(253, 'Top-most best deal drawer-guide', 9, 215, 230, 'f0275e4fe1cdf59292d87f6b4602f404.jpg', 'http://localhost:5000/images/f0275e4fe1cdf59292d87f6b4602f404.jpg', 'Guides and Accessories', '0000-00-00 00:00:00', '2024-06-03 12:42:12'),
(254, 'Door-hole-saw', 11, 587, 600, '6226c1cf521e49e68db843d7c9a65738.jpg', 'http://localhost:5000/images/6226c1cf521e49e68db843d7c9a65738.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 12:42:56'),
(255, 'KYK-holesaw-set', 8, 191, 210, 'd3d2ee747cb55a5371deb3624f9d33a7.jpg', 'http://localhost:5000/images/d3d2ee747cb55a5371deb3624f9d33a7.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 12:44:43'),
(256, 'Lotus-hole-saw', 6, 293, 220, 'b20c466edb3137225f2ab0c114cbee7f.jpg', 'http://localhost:5000/images/b20c466edb3137225f2ab0c114cbee7f.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 12:45:03'),
(257, 'Stanley-crosscut-saw', 10, 382, 400, 'ad9981949c194579144646076bca0bce.jpg', 'http://localhost:5000/images/ad9981949c194579144646076bca0bce.jpg', 'Tools', '0000-00-00 00:00:00', '2024-06-03 12:45:22'),
(258, 'Wood-chisel', 9, 340, 375, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(259, 'Door-jamb mirante', 5, 2175, 2320, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(260, 'Door-jamb tanguile', 4, 2700, 2790, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(261, 'PVC-Brown-with-Louver', 7, 2320, 2380, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(262, 'PVC-White-With-Louver', 5, 2700, 2790, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(263, 'Apricot white 869 Destiny elastomeric paint', 9, 2658, 2600, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(264, 'Bosny-spray-paint-black', 20, 130, 135, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(265, 'Boysen Automotive lacquer black #1390 4 liters', 13, 957, 998, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(266, 'Boysen-permacoat flat latex white', 11, 2610, 2675, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(267, 'Coat-saver epoxy primer gray 4 liters', 10, 955, 995, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(268, 'Davies-Acrycolor black 1 liter', 15, 102, 118, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(269, 'Davies-biofresh + satin white 4 liters', 8, 827, 843, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(270, 'Davies DV-2040 oil wood stain maple', 12, 545, 585, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(271, 'Davies-megacryl DV-515 Semi gloss white', 9, 3025, 3075, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(272, 'Davies-Flat-Wall-Enamel-White', 13, 735, 768, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(273, 'DAVIES-WHISPER-BEIGE', 20, 218, 236, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(274, 'DAVIES-WHISPER-PINK', 22, 207, 215, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(275, 'Davies-hi-solid clear gloss lacquer', 10, 789, 799, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(276, 'Davies-megacryl-500-white', 9, 2638, 2645, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(277, 'Davies-concrete-primer and sealer white', 10, 2600, 2635, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(278, 'Megacryl-glorious-yellow', 9, 812, 823, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(279, 'Davies-525-megacryl-gloss-white', 12, 3025, 3023, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(280, 'Longspan RIB22', 5, 6179, 6198, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(281, 'Long-TWIN-RIB', 6, 6166, 6300, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(282, 'Apo Galfan Corrugated sheet', 7, 873, 887, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(283, 'G.I Plain Sheet', 8, 2267, 2300, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(284, 'Insulation', 6, 2996, 3013, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(285, 'Aluminum duct-tape 2x 150ft', 15, 243, 249, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(286, 'Blind-rivet', 10, 350, 400, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(287, 'Sealant-gun', 20, 135, 145, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(288, 'Butterfly tin snips', 19, 405, 415, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(289, 'Pioneer Pro ElastoSeal', 18, 181, 190, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(290, 'Stanley riveter chrome', 7, 570, 585, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(291, 'Tek-screw adaptor', 20, 40, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(292, 'Tekscrew-Adaptor', 22, 37, 53, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(293, 'Tinsnip ordinary', 17, 340, 355, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(294, 'Angle bar', 6, 7274, 7280, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(295, 'GI PIPE china S20', 7, 2269, 2289, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(296, 'GI PIPE china S40', 8, 1822, 1832, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(297, 'GI PIPE local S20', 5, 3800, 3850, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(298, 'GI-PIPE local S40', 5, 4900, 4950, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(299, 'C-purlins Bl', 9, 974, 987, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(300, 'C-purlin Gl', 10, 835, 845, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(301, 'Plain round bar', 8, 1527, 1537, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(302, 'Square bar', 7, 1480, 1500, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(303, 'Tubular bar', 8, 1987, 2000, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(304, 'Aluminum Screen 4', 10, 3780, 3800, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(305, 'Cylinder hinges', 15, 55, 69, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(306, 'Flat bar', 8, 3200, 3245, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(307, 'Hardware cloth 1-8', 9, 937, 988, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(308, 'Kawaguchi LPG Gas Torch', 12, 852, 867, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(309, 'KYK turnbuckle', 20, 133, 156, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(310, 'Steel brush penguin', 22, 55, 65, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(311, 'Master brand cutting outfit', 5, 5720, 5780, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(312, 'Nihonweld welding rod n6013', 14, 616, 632, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(313, 'Nihonweld Welding Rod N6011', 13, 266, 275, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(314, 'Nihonweld Welding Rod N7018', 7, 3360, 3375, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(315, 'Pillow block', 9, 1194, 1210, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(316, 'Scaffolding set S20', 6, 2842, 2890, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(317, 'Steel matting', 8, 1900, 1990, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(318, 'Telescopic--U', 18, 260, 270, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(319, 'Tigweld filler', 11, 1050, 1070, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(320, 'Turnbuckle', 25, 98, 110, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(321, 'Twisted-Wire-Cup-Brush', 19, 120, 135, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(322, 'Tyrolit-ultra-thin-cutting-disc', 20, 105, 115, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(323, 'Tyrolit-metal-grinding-disc', 17, 110, 120, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(324, 'Tyrolit-metal-cutting-disc', 10, 630, 635, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(325, 'Welding handle', 14, 376, 386, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(326, 'Welding mask with handle', 20, 68, 75, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(327, 'Deformed-bar-(G33)', 9, 650, 675, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(328, 'Deformed-bar (G40)', 8, 753, 795, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(329, 'Deformed-bar(G60)', 15, 176, 190, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(330, 'GI-wire #16', 7, 1300, 1350, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(331, 'Sandlex handsaw blade', 21, 50, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(332, 'Tailin-cutting-wheel 14', 18, 198, 210, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(333, 'Tyrolit-ultra-thin-cutting-disc 4', 20, 105, 115, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(334, 'Tyrolit-metal-grinding-disc 4', 10, 630, 670, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(335, 'Tyrolit-metal-cutting-disc', 12, 630, 646, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(336, 'Bosny-Silicone-Sealant', 19, 180, 190, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(337, 'SILICONE-SEALANT-JOINSIL', 22, 165, 175, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(338, 'Bostik-el-henera', 9, 770, 790, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(339, 'NO-MORE-NAIL-BOSNY', 20, 186, 195, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(340, 'Addmix Protect', 15, 45, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(341, 'Addmix Ultra', 12, 45, 60, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(342, 'Bostik Rugby Excel 4 Liters', 14, 784, 796, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(343, 'Devcon Plastic Steel Epoxy', 10, 188, 125, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(344, 'Metylan Wallpaper Paste', 18, 462, 475, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(345, 'Pioneer Mighty Bond', 20, 25, 30, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(346, 'Mighty Gasket', 13, 105, 115, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(347, 'GYPSUM BOARD STAR BRAND', 16, 490, 500, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(348, 'Hardieflex', 11, 1852, 1875, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(349, 'KNAUF StandardShield', 17, 550, 555, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(350, 'MR Gypsum Board', 12, 820, 835, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(351, 'Blind Rivet', 25, 350, 360, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(352, 'Carrying Channel', 18, 130, 135, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(353, 'Ceiling Manhole Steel White', 9, 2898, 2913, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(354, 'Gardner', 14, 1320, 1330, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(355, 'L Moulding', 22, 250, 255, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(356, 'Metal Studs', 28, 215, 220, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(357, 'Metal Tracks', 27, 190, 205, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(358, 'Shadowline Wall', 25, 119, 125, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(359, 'W Clip', 30, 5, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(360, 'Wall Angle', 28, 55, 65, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(361, 'KYK Aviation Snip Straight', 14, 262, 270, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(362, 'KYK Tin Snip Vanadium', 19, 544, 555, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(363, 'Stanley 14-563 Straight Cut Aviation Snips', 17, 426, 436, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(364, 'Stanley Riveter Chrome', 15, 570, 585, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(365, 'Utility Box', 45, 35, 45, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(366, 'Square Box', 50, 40, 45, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(367, 'PVC Square Box Cover', 60, 15, 20, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(368, 'PVC Electrical Pipe Thickwall', 35, 170, 180, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(369, 'Metal Utility Box', 40, 43, 48, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(370, 'Metal Junction Box', 35, 55, 60, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(371, 'Electrical Pipe', 30, 215, 224, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(372, 'Short Elbow', 22, 14, 25, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(373, 'Sandflex', 27, 50, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(374, 'RSC Coupling', 20, 20, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(375, 'Royu Moulding', 16, 55, 60, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(376, 'PVC Electrical Locknut', 40, 5, 13, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(377, 'Neltex Junction Box', 25, 35, 45, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(378, 'Male Adapter', 38, 12, 18, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(379, 'Long Elbow', 12, 188, 198, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(380, 'Long Electrical Long Elbow', 18, 45, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(381, 'LOCKNUT 2-1-2', 19, 39, 47, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(382, 'Junction Box Cover', 28, 15, 25, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(383, 'EMT Coupling', 26, 81, 90, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(384, 'EMT Connector', 22, 32, 43, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(385, 'Clean Out Adapter', 16, 56, 65, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(386, 'Bushing Reducer', 20, 18, 26, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(387, 'Atlanta Moulding', 27, 50, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(388, 'PVC Pipe', 17, 875, 895, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(389, 'PPR Pipe', 12, 665, 675, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(390, 'Tee with Thread', 35, 10, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(391, 'Rubber Bushing', 28, 19, 25, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(392, 'PPR Endcap', 44, 6, 13, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(393, 'PPR Coupling', 26, 25, 35, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(394, 'PPR Lucky Union Socket Type', 14, 530, 543, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(395, 'Neltex Tee Sanitary', 12, 225, 235, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(396, 'Neltex Solvent', 18, 140, 150, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(397, 'Neltex PVCU End Cap', 30, 10, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(398, 'Neltex PVC Saniline Elbow', 15, 817, 825, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(399, 'Neltex Coupling', 20, 90, 95, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(400, 'Neltex Clean Out', 16, 572, 585, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(401, 'Neltex Tee Reducer', 22, 27, 35, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(402, 'Neltex Sanitary Bushing Reducer', 17, 422, 435, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(403, 'Neltex PPR Endcap', 40, 6, 12, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(404, 'Lucky Elbow 90', 12, 1210, 1215, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(405, 'Lucky Clean Out', 18, 60, 65, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(406, 'Lucky Waterline Elbow with Thread 1/2', 30, 10, 15, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(407, 'Lucky Sanitary Elbow 45', 14, 999, 1007, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(408, 'Lucky PPR Tee', 22, 40, 45, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(409, 'Lucky PPR Gate', 15, 585, 595, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(410, 'Lucky PPR Elbow', 20, 35, 45, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(411, 'Lucky PPR Coupling', 28, 20, 30, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(412, 'Lucky P-Trap', 19, 131, 142, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(413, 'Lucky Waterline Tee', 23, 128, 136, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(414, 'GI Nipple', 25, 97, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(415, 'Galvanize Horse Clamp', 22, 20, 30, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(416, 'GI End Plug', 18, 70, 75, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(417, 'Female Hose Coupling', 29, 25, 30, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(418, 'Elbow', 30, 45, 50, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(419, 'Elbow with Thread', 34, 20, 25, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(420, 'Boscolastic Teaser', 10, 5170, 5180, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(421, 'Captain Shield', 20, 45, 55, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(422, 'Sika Davco K11 Flex', 14, 2650, 2670, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(423, 'Bostik Powerseal', 18, 539, 545, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(424, 'Novtek Concrete', 16, 385, 390, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(425, 'Novtek Waterproofing', 12, 2700, 2715, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(426, 'Plaster Bonding Adhesive', 17, 461, 470, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=427;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
