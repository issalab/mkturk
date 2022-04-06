export function loadFiles() {
  return new Promise<any[]>((resolve) =>
    setTimeout(() => resolve([{ hi: 'bye' }, { new: 'york' }]), 500)
  );
}
