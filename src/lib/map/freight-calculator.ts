export interface FreightParams {
  distanceKm: number;
  durationMinutes: number;
}

export interface FreightConfig {
  baseFare: number;
  pricePerKm: number;
  pricePerHour: number;
}

const defaultConfig: FreightConfig = {
  baseFare: 50,
  pricePerKm: 3.5,
  pricePerHour: 40,
};

export function calculateFreight(
  params: FreightParams,
  config: FreightConfig = defaultConfig,
) {
  const hours = params.durationMinutes / 60;

  const distanceCost = params.distanceKm * config.pricePerKm;
  const timeCost = hours * config.pricePerHour;

  const total = config.baseFare + distanceCost + timeCost;

  return {
    baseFare: config.baseFare,
    distanceCost,
    timeCost,
    total,
  };
}
