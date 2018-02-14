import { expect } from 'chai';
import ValidadePercent from '../components/ValidadePercent.js';

describe('App', () => {

  describe('Validade Percent', () => {
    context('Smoke test', () => {
      it('should be exist', () => {
        expect(ValidadePercent).to.exist;
      });
    });
    context('Check object', () => {
      it('should object be exist', () => {
        expect(ValidadePercent()).to.exist;
        expect(ValidadePercent()).to.exist;
      });
      it('should object have property positive and negative', () => {
        expect(ValidadePercent()).to.have.own.property('positive');
        expect(ValidadePercent()).to.have.own.property('negative');
      });
      it('should object return value zero when not contains arguments', () => {
        expect(ValidadePercent().positive).to.be.equal(0);
        expect(ValidadePercent().negative).to.be.equal(0);
      });
      it('should object return value is a number type', () => {
        expect(ValidadePercent(725416, 9876).positive).to.be.a('number');
        expect(ValidadePercent(725416, 9876).negative).to.be.a('number');
      });
    });
  });

});
