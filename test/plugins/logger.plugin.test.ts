import { buildLogger, logger } from "../../src/plugins/logger.plugin";

describe("plugins/logger.plugin.ts", () => {
  test("buildLogger should return a function Logger", () => {
    const logger = buildLogger("test");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(logger, "log");

    const message = "test message";
    const service = "test service";

    const testLogger = buildLogger(service);

    testLogger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({ level: "info", message, service })
    );
  });

  test("logger.error should log a erro", () => {
    const winstonLoggerMock = jest.spyOn(logger, "error");

    const message = "test message";
    const service = "test service";

    const testLogger = buildLogger(service);

    testLogger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
       expect.objectContaining({ message, service })
    );
  });
});
