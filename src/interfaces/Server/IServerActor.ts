import AbstractActor from "../../actors/runtime/AbstractActor";
import Class from "../../types/Class";

export default interface IServerActor {
  registerActor<T extends AbstractActor>(cls: Class<T>): Promise<void>;
  getRegisteredActors(): Promise<string[]>;
  init(): Promise<void>;

  // deactivateActor(actorType: string, actorId: string): Promise<void>;
}