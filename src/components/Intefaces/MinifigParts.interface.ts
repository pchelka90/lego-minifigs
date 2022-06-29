export interface ExternalIds {
  BrickLink: string[];
  BrickOwl: string[];
  Brickset: string[];
  LEGO: string[];
}

export interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: ExternalIds;
  print_of: string;
}

export interface BrickLink {
  ext_ids: number[];
  ext_descrs: string[][];
}

export interface BrickOwl {
  ext_ids: number[];
  ext_descrs: string[][];
}

export interface LEGO {
  ext_ids: number[];
  ext_descrs: string[][];
}

export interface Peeron {
  ext_ids: any[];
  ext_descrs: string[][];
}

export interface LDraw {
  ext_ids: number[];
  ext_descrs: string[][];
}

export interface ExternalIds2 {
  BrickLink: BrickLink;
  BrickOwl: BrickOwl;
  LEGO: LEGO;
  Peeron: Peeron;
  LDraw: LDraw;
}

export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: ExternalIds2;
}

export interface MinifigPartsResult {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface RootObject {
  count: number;
  next?: any;
  previous?: any;
  results: MinifigPartsResult[];
}
