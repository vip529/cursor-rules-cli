export interface PackFile {
  path: string;
  content: string;
}

export interface Pack {
  id: string;
  label: string;
  files: PackFile[];
}

export interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
}

export interface DetectionResult {
  detected: string[];
  labels: string[];
}
