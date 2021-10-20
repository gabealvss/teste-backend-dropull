class IPFSPin {
  public IpfsHash: string;
  public PinSize: number;
  public Timestamp: string;

  constructor(properties) {
    Object.assign(this, properties);
  }
}

export { IPFSPin };
