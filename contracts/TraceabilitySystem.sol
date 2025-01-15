// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract TraceabilitySystem is Ownable, Pausable {
    // 产品结构
    struct Product {
        uint256 id;
        string name;
        string category;
        address manufacturer;
        uint256 createTime;
        ProductStatus status;
        bytes32[] batchIds;
    }

    // 批次结构
    struct Batch {
        bytes32 id;
        uint256 productId;
        uint256 quantity;
        uint256 produceDate;
        string location;
        BatchStatus status;
        bytes32[] trackingData;
    }

    // 追踪数据结构
    struct TrackingData {
        bytes32 id;
        bytes32 batchId;
        string dataType;
        string value;
        uint256 timestamp;
        address recorder;
    }

    enum ProductStatus { Created, Active, Suspended, Discontinued }
    enum BatchStatus { Created, InProduction, Completed, Shipped, Delivered }

    // 存储映射
    mapping(uint256 => Product) public products;
    mapping(bytes32 => Batch) public batches;
    mapping(bytes32 => TrackingData) public trackingData;
    
    // 事件定义
    event ProductCreated(uint256 indexed id, string name, address manufacturer);
    event BatchCreated(bytes32 indexed id, uint256 indexed productId, uint256 quantity);
    event TrackingDataAdded(bytes32 indexed batchId, bytes32 dataId, string dataType);
    
    // 计数器
    uint256 private productIdCounter;
    
    constructor() {
        productIdCounter = 0;
    }

    // 创建产品
    function createProduct(
        string memory name,
        string memory category
    ) public whenNotPaused returns (uint256) {
        productIdCounter++;
        
        Product storage newProduct = products[productIdCounter];
        newProduct.id = productIdCounter;
        newProduct.name = name;
        newProduct.category = category;
        newProduct.manufacturer = msg.sender;
        newProduct.createTime = block.timestamp;
        newProduct.status = ProductStatus.Active;
        
        emit ProductCreated(productIdCounter, name, msg.sender);
        return productIdCounter;
    }

    // 创建批次
    function createBatch(
        uint256 productId,
        uint256 quantity,
        string memory location
    ) public whenNotPaused returns (bytes32) {
        require(products[productId].id != 0, "Product does not exist");
        
        bytes32 batchId = keccak256(abi.encodePacked(
            productId,
            block.timestamp,
            msg.sender
        ));
        
        Batch storage newBatch = batches[batchId];
        newBatch.id = batchId;
        newBatch.productId = productId;
        newBatch.quantity = quantity;
        newBatch.produceDate = block.timestamp;
        newBatch.location = location;
        newBatch.status = BatchStatus.Created;
        
        products[productId].batchIds.push(batchId);
        
        emit BatchCreated(batchId, productId, quantity);
        return batchId;
    }

    // 添加追踪数据
    function addTrackingData(
        bytes32 batchId,
        string memory dataType,
        string memory value
    ) public whenNotPaused returns (bytes32) {
        require(batches[batchId].id != 0, "Batch does not exist");
        
        bytes32 dataId = keccak256(abi.encodePacked(
            batchId,
            dataType,
            block.timestamp
        ));
        
        TrackingData storage newData = trackingData[dataId];
        newData.id = dataId;
        newData.batchId = batchId;
        newData.dataType = dataType;
        newData.value = value;
        newData.timestamp = block.timestamp;
        newData.recorder = msg.sender;
        
        batches[batchId].trackingData.push(dataId);
        
        emit TrackingDataAdded(batchId, dataId, dataType);
        return dataId;
    }
} 