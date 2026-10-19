INSERT INTO category (id, name, slug, description, created_at, updated_at)
VALUES
  ('cat-majuli', 'Majuli', 'majuli', 'Goods sourced from Majuli.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('cat-food', 'Food & Rice', 'food-rice', 'Local food and rice from Assam.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('cat-textiles', 'Textiles & Clothing', 'textiles-clothing', 'Clothing and textiles from Assam.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO stock_location (id, name, code, is_default, created_at, updated_at)
VALUES ('loc-default', 'Default stock location', 'DEFAULT', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT (code) DO NOTHING;

-- No shipping price or product claims are seeded: the merchant must set real rates and verified catalog data.
