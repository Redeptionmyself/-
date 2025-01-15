-- 用户表
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(42) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 产品表
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    contract_id INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    manufacturer_id INTEGER REFERENCES users(id),
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 批次表
CREATE TABLE batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_batch_id BYTEA NOT NULL,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    location VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    produce_date TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 追踪数据表
CREATE TABLE tracking_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    contract_data_id BYTEA NOT NULL,
    batch_id UUID REFERENCES batches(id),
    data_type VARCHAR(50) NOT NULL,
    data_value JSONB NOT NULL,
    recorder_id INTEGER REFERENCES users(id),
    recorded_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 环境监测数据表
CREATE TABLE environment_data (
    id SERIAL PRIMARY KEY,
    location_id INTEGER NOT NULL,
    temperature DECIMAL(5,2),
    humidity DECIMAL(5,2),
    light_intensity INTEGER,
    co2_level INTEGER,
    recorded_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- RFID记录表
CREATE TABLE rfid_records (
    id SERIAL PRIMARY KEY,
    device_id VARCHAR(50) NOT NULL,
    tag_id VARCHAR(50) NOT NULL,
    batch_id UUID REFERENCES batches(id),
    location VARCHAR(100) NOT NULL,
    recorded_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 质量检测表
CREATE TABLE quality_checks (
    id SERIAL PRIMARY KEY,
    batch_id UUID REFERENCES batches(id),
    check_type VARCHAR(50) NOT NULL,
    check_result JSONB NOT NULL,
    inspector_id INTEGER REFERENCES users(id),
    status VARCHAR(20) NOT NULL,
    checked_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 索引
CREATE INDEX idx_products_manufacturer ON products(manufacturer_id);
CREATE INDEX idx_batches_product ON batches(product_id);
CREATE INDEX idx_tracking_batch ON tracking_data(batch_id);
CREATE INDEX idx_rfid_batch ON rfid_records(batch_id);
CREATE INDEX idx_quality_batch ON quality_checks(batch_id); 